
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let array = [];
    if (matrix == undefined) {
        return array;
    }
    matrix.forEach((item, index) => {
        if (index % 2 === 0) {
            for (let i = 0; i < item.length; i++)
            {
                array.push(item[i]);
            }
        }
        else {
            for (let i = 0; i < item.length; i++)
            {
                array.push(item[(item.length - 1 - i)]);
            }
        }        });
    return array;
}
