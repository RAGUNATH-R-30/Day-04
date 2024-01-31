//1a. Print odd numbers in an array

//Anonymous Function
var res = function(arr){
    var odd = []
    for(var i = 0;i<arr.length;i++){
        if(arr[i]%2!=0)
            odd.push(arr[i])
    }
    return odd;
    
}
console.log(res([1,2,3,4,5,6,7,8,9]))

//IIFE
(function odd(arr){
    var odd = []
    for(var i = 0;i<arr.length;i++){
        if(arr[i]%2!=0)
            odd.push(arr[i])
    }
    console.log(odd)
})([1,2,3,4,5,6,7,8,9]);

//1b.Convert all the strings to title caps in a string array

//Anonymous Function
var res = function(arr){
    var temp_arr = []
    for(var i = 0;i<arr.length;i++){
        var temp = arr[i]
        temp_arr.push(temp[0].toUpperCase()+arr[i].slice(1))
    }
    return temp_arr;
}
console.log(res(["string","cubic","meters"]))

//IIFE
(function titlecaps(arr){
    var temp_arr = []
    for(var i = 0;i<arr.length;i++){
        var temp = arr[i]
        temp_arr.push(temp[0].toUpperCase()+arr[i].slice(1))
    }
    console.log(temp_arr)
})(["string","cubic","meters"]);

//1c.Sum of all numbers in an array

//Anonymous Function
var res = function(arr){
    var sum = 0;
    for(var i = 0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum;
}
console.log(res([1,2,3,4,5,6,7,8,9]))

//IIFE
(function sum_n_numbers(arr){
    var sum = 0;
    for(var i = 0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log(sum)
})([1,2,3,4,5,6,7,8,9]);

//1d.Return all the prime numbers in an array

//Anonymous Function
var primecheck = function(number){
    if(number<=1){
        return false
    }
    for(var i = 2;i<number;i++){
        if(number%i==0){
            return false
        }
    }
return true;
}
var primenumbers = function(numbers){
var temp =[]
for(var i = 0;i<numbers.length;i++){
    if(primecheck(numbers[i])){
        temp.push(numbers[i])
    }
}
return temp;
}


var numbers = [1,2,3,4,5,6,7,8,9]
console.log(primenumbers(numbers))

//IIFE
(function (){
    var primecheck = function(number){
        if(number<=1){
            return false
        }
        for(var i = 2;i<number;i++){
            if(number%i==0){
                return false
            }
        }
    return true;
    }
    var primenumbers = function(numbers){
    var temp =[]
    for(var i = 0;i<numbers.length;i++){
        if(primecheck(numbers[i])){
            temp.push(numbers[i])
        }
    }
    return temp;
    }
    
    
    var numbers = [1,2,3,4,5,6,7,8,9]
    console.log(primenumbers(numbers))
})();

//1e.Return all the palindromes in an array

//Anonymous Function
var res = function(arr){
    var palindrome_arr = []
    for(var i =0;i<arr.length;i++){
        var temp_str = arr[i].split("").reverse()
        if(temp_str.join("")==arr[i]){
            palindrome_arr.push(arr[i])
        }
    }
    return palindrome_arr;
}
console.log(res(["madam","mam","car","race"]))

//IIFE
(function(arr){
    var palindrome_arr = []
    for(var i =0;i<arr.length;i++){
        var temp_str = arr[i].split("").reverse()
        if(temp_str.join("")==arr[i]){
            palindrome_arr.push(arr[i])
        }
    }
console.log(palindrome_arr)
})(["madam","mam","car","race"]);

//1f.Return median of two sorted arrays of the same size.

//Anonymous Function
var median = function(arr){
    if(arr.length%2!=0){
        return arr[Math.round(arr.length/2)-1]
    }
    else{
        var median_strt_index = (arr.length/2)
        var median = (arr[median_strt_index-1]+arr[median_strt_index])/2
        return median;
    }
}


var arr1 = [2,3,5,8,9]
var arr2 = [10,12,14,16,18,20]
var arr3 = arr1
for(var i = 0;i<arr2.length;i++){
    arr1.push(arr2[i])
    
}

arr3.sort(function(a, b) {
    return a - b;
})

console.log(median(arr3))

//IIFE
(function(){
    var median = function(arr){
        if(arr.length%2!=0){
            return arr[Math.round(arr.length/2)-1]
        }
        else{
            var median_strt_index = (arr.length/2)
            var median = (arr[median_strt_index-1]+arr[median_strt_index])/2
            return median;
        }
    }
    
    
    var arr1 = [2,3,5,8,9]
    var arr2 = [10,12,14,16,18,20]
    var arr3 = arr1
    for(var i = 0;i<arr2.length;i++){
        arr1.push(arr2[i])
        
    }
    
    arr3.sort(function(a, b) {
        return a - b;
    })
    
    console.log(median(arr3))
})()

//1g.Remove duplicates from an array

//Anonymous Function
var res = function(arr){
    var rem_dup = new Set(arr)
    var original_arr = [...rem_dup]
    return original_arr
}
console.log(res([1,2,3,3,1,2,4,5,6]))

//IIFE
(function (arr){
    var rem_dup = new Set(arr)
    var original_arr = [...rem_dup]
    console.log(original_arr)
})([1,2,3,3,1,2,4,5,6])

//1h.Rotate an array by k times

//Anonymous Function
var rotate = function (arr,k){
    for(var i = 0;i<k;i++){
        var temp = arr.slice(arr.length-1).toString()
        arr.splice(0,0,temp)
        arr.splice(arr.length-1,1)
    }
    var res = arr.map(Number)
    return res;
}
var arr = [1, 2, 3, 4, 5]
var k =2
console.log(rotate(arr,k))

//IIFE
(function(arr,k){
    for(var i = 0;i<k;i++){
        var temp = arr.slice(arr.length-1).toString()
        arr.splice(0,0,temp)
        arr.splice(arr.length-1,1)
    }
    var res = arr.map(Number)
    console.log(res)
})([1, 2, 3, 4, 5],2);

//2a.Print odd numbers in an array

//Arrow Function
var res =(arr)=>{
    var odd = []
    for(var i = 0;i<arr.length;i++){
        if(arr[i]%2!=0)
            odd.push(arr[i])
    }
    return odd;
    
}
console.log(res([1,2,3,4,5,6,7,8,9]))

//2b.Convert all the strings to title caps in a string array

//Arrow Function
var res = (arr)=>{
    var temp_arr = []
    for(var i = 0;i<arr.length;i++){
        var temp = arr[i]
        temp_arr.push(temp[0].toUpperCase()+arr[i].slice(1))
    }
    return temp_arr;
}
console.log(res(["string","cubic","meters"]))

//2c.Sum of all numbers in an array

//Arrow Function
var res =(arr)=>{
    var sum = 0;
    for(var i = 0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum;
}
console.log(res([1,2,3,4,5,6,7,8,9]))

//2d.Return all the prime numbers in an array

//Arrow Function

var primecheck = (number)=>{
    if(number<=1){
        return false
    }
    for(var i = 2;i<number;i++){
        if(number%i==0){
            return false
        }
    }
return true;
}
var primenumbers = (numbers)=>{
var temp =[]
for(var i = 0;i<numbers.length;i++){
    if(primecheck(numbers[i])){
        temp.push(numbers[i])
    }
}
return temp;
}


var numbers = [1,2,3,4,5,6,7,8,9]
console.log(primenumbers(numbers))

//2e.Return all the palindromes in an array

//arrow Function
var res =(arr)=>{
    var palindrome_arr = []
    for(var i =0;i<arr.length;i++){
        var temp_str = arr[i].split("").reverse()
        if(temp_str.join("")==arr[i]){
            palindrome_arr.push(arr[i])
        }
    }
    return palindrome_arr;
}
console.log(res(["madam","mam","car","race"]))