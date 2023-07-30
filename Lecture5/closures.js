
function grandparent(){

    let a=5;

    function parent(){

        let b=6;

        function child(){

            let c=7;

            return a+b+c;
        }

        return child;
    }

    return parent;
}


let parent = grandparent();
let child = parent();
let ans= child();
console.log(ans);