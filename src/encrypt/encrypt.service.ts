import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as crypto from 'crypto';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class EncryptService {
  private privateKey = fs.readFileSync('./src/keys/private.pem', 'utf8');
  private publicKey = fs.readFileSync('./src/keys/public.pem', 'utf8');

  encrypt(payload: string) {
    try {
      const aesKey = crypto.randomBytes(32).toString('hex').slice(0, 32); //generate random string of 32 bytes
      const data2 = CryptoJS.AES.encrypt(payload, aesKey).toString(); // encrypt payload with AES
      const buffer = Buffer.from(aesKey); // convert aesKey to Buffer
      const data1 = crypto.privateEncrypt(this.privateKey, buffer).toString('base64'); // encrypt aesKey with RSA
      return {
        successful: true,
        error_code: '',
        data: { data1, data2 }
      };
    } catch (error) {
      return {
        successful: false,
        error_code: '500',
        data: { error: error.message }
      };
    }
  }

  decrypt(data1: string, data2: string) {
    try {
      const aesKey = crypto.publicDecrypt(this.publicKey, Buffer.from(data1, 'base64')).toString(); // decrypt aesKey with RSA
      const bytes = CryptoJS.AES.decrypt(data2, aesKey); // decrypt payload with AES
      const payload = bytes.toString(CryptoJS.enc.Utf8); // convert decrypted bytes to string
      return {
        successful: true,
        error_code: '',
        data: { payload }
      };
    } catch (error) {
      return {
        successful: false,
        error_code: '500',
        data: { error: error.message }
      }
    }
  }
}
