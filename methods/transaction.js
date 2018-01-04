module.exports = {
    gasLimit: (connect) => {
        return new Promise((resolve, reject) => {
           resolve(3000000);
        })

    },
    difficulty: (connect) => {
        return new Promise((resolve, reject) => {
            connect.eth.getBlock('latest')
                .then(block => {
                    const result = block.difficulty;
                    resolve(result)
                })
                .catch(e => {
                    reject(new Error(e));
                })
        })

    }

}