export declare class EncryptService {
    private privateKey;
    private publicKey;
    encrypt(payload: string): {
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
    decrypt(data1: string, data2: string): {
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
