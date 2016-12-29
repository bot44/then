interface Then {
    <T>(
        value: T | PromiseLike<T>,
        onFulfilled: (value: T) => T | PromiseLike<T>,
        onRejected: ((reason: any) => T | PromiseLike<T>) | undefined | null
    ): void;
}

declare const then: Then;

export = then;
