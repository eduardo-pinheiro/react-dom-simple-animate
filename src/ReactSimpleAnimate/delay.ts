export default async function delay(time: number, callbackFn?: Function) {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            if (callbackFn) callbackFn();
        }, time);
    })
}