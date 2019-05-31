const sheep = function(num) {
    if(num === 0) {
        return 'All sheep jumped over the fence'
    }

    return `${num}: Another sheep jump over of the fence` + sheep(--num)
}
// console.log(sheep(3));