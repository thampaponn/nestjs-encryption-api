import { EncryptService } from './encrypt.service';
import { EncryptDto } from './dto/encrypt.dto';
import { DecryptDto } from './dto/decrypt.dto';
export declare class EncryptController {
    private readonly service;
    constructor(service: EncryptService);
    encrypt(body: EncryptDto): {
        successful: boolean;
        error_code: string;
        data: {
            data1: string;
            data2: any;
            error?: undefined;
        };
    } | {
        successful: boolean;
        error_code: string;
        data: {
            error: any;
            data1?: undefined;
            data2?: undefined;
        };
    };
    decrypt(body: DecryptDto): {
        successful: boolean;
        error_code: string;
        data: {
            payload: any;
            error?: undefined;
        };
    } | {
        successful: boolean;
        error_code: string;
        data: {
            error: any;
            payload?: undefined;
        };
    };
}
