// 버블 정렬

function bubbleSort(array) {
    let tmp = 0;

    for (let i=array.length-1; i>0; i--) {
        for (let k=0; k<i; k++) {
            if (array[k] > array[k+1]) {
                tmp = array[k];
                array[k] = array[k+1];
                array[k+1] = tmp;
            }
        }
    }
    return array;
}

let sample = [9, 5, 13, 6, 2];
console.log(`초기 Array : ${sample}`);
console.log(`버블정렬된 Array : ${bubbleSort(sample)}`);
console.log(sample);                                        // sample 자체가 변경된다.