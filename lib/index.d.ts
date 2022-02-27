/ Type definitions for passport-local 1.0.0
// Project: https://github.com/jaredhanson/passport-local
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="passport"/>

import { Strategy as PassportStrategy } from "passport-strategy";
import express = require("express");

interface IStrategyOptions {
    addressField?: string | undefined;
    messageField?: string | undefined;
    signedField?: string | undefined;
    passReqToCallback?: false | undefined;
}

interface IStrategyOptionsWithRequest {
    addressField?: string | undefined;
    messageField?: string | undefined;
    signedField?: string | undefined;
    passReqToCallback: true;
}

interface IVerifyOptions {
    message: string;
}

interface VerifyFunctionWithRequest {
    (
        req: express.Request,
        addressField: string | undefined,
        messageField: string | undefined,
        signedField: string | undefined,
        done: (error: any, user?: any, options?: IVerifyOptions) => void
    ): void;
}

interface VerifyFunction {
    (
        addressField: string | undefined,
        messageField: string | undefined,
        signedField: string | undefined,
        done: (error: any, user?: any, options?: IVerifyOptions) => void
    ): void;
}

declare class Strategy extends PassportStrategy {
    constructor(
        options: IStrategyOptionsWithRequest,
        verify: VerifyFunctionWithRequest
    );
    constructor(options: IStrategyOptions, verify: VerifyFunction);
    constructor(verify: VerifyFunction);

    name: string;
}
