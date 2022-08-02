function doSomething() {
    return new Promise((resolve, reject) => {
        console.log("Готово.");
        // Успех в половине случаев.
        if (Math.random() > .5) {
            resolve("Успех")
        } else {
            reject("Ошибка")
        }
    })
}

doSomething().then(successCallback, failureCallback);