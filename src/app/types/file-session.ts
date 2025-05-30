import {ProgressCallback} from "../core/services/progress-callback";

export type FileType = '-' | 'd' | 'c' | 'b' | 's' | 'p' | 'l' | '';

export declare interface FileItem {
    filename: string;
    type: FileType;
    mode: string;
    user?: string;
    group?: string;
    size: number,
    mtime: number,
    link?: LinkInfo;
    access?: PermInfo;
}

export declare interface LinkInfo {
    target?: string;
    broken?: boolean;
}

export declare interface PermInfo {
    read: boolean;
    write: boolean;
    execute: boolean;
}

export declare interface FileSession {

    ls(path: string): Promise<FileItem[]>;

    rm(path: string, recursive: boolean): Promise<void>;

    get(remotePath: string, localPath: string): Promise<void>;

    put(localPath: string, remotePath: string): Promise<void>;

    mkdir(path: string): Promise<void>;

    getTemp(remotePath: string, progress?: ProgressCallback): Promise<string>;

    uploadBatch(sources: string[], pwd: string, fileCb: (name: string, index: number, total: number) => void,
                progressCb: ProgressCallback, failCb: (name: string, e: Error) => Promise<boolean>): Promise<void>;

    home(): Promise<string>;
}
