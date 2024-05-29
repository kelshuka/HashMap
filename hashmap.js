
class Node {
    constructor(key=null, value = null) {
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }
}

class HashMap{
    /* constructor(head=null){
        this.head = head;
    } */
    arr = new Array(4);// if (4) means we want only 4 places or buckets

    hash(key){
        let hashCode = 0;
        const primeNumber = 5;// any prime number
        for (let i=0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % 16;// b/cos js unable to hold large numbers precisely.
        }
        return hashCode;
    }

    set(key, value){
        const idx = this.hash(key);
        //this.arr[idx] = value;
        let node = new Node(key,value);
        if (this.arr[idx]){
            if (this.arr[idx].key == key) {
                this.arr[idx].value = value;
            } else {
                this.arr[idx].nextNode = node;
            }        
        } else {
            this.arr[idx] = node;
        }
    }

    get(key){
        const idx = this.hash(key);
        if (!this.arr[idx]){return null;}

        return this.arr[idx]; 
    }

    has(key){
        const idx = this.hash(key);
        if (this.arr[idx]){
            if(this.arr[idx].key == key) {
                return true;
            } else {return false;}
        } else {
            return false;
        }
    }
    remove(key){
        const idx = this.hash(key);
        if (this.arr[idx]){
            this.arr[key] = null;
            return true;
        } else {return false;}
    }
    length(){
        let count = 0;
        for (let ent of this.arr){
            if (ent) {
                count++;
            }
        }
        return count;
    }
    clear(){
        this.arr = null;
    }
    keys(){
        const kArr = [];
        for (let ent of this.arr){
            if (ent){
                kArr.push(ent.key);
            }
        }
        return kArr;
    }
    values(){
        const kArr = [];
        for (let ent of this.arr){
            if (ent){
                kArr.push(ent.value);
            }
        }
        return kArr;
    }
    entries(){
        const kArr = [];
        for (let ent of this.arr){
            if (ent){
                kArr.push([ent.key, ent.value]);
            }
        }
        return kArr;

    }


}

const myTable = new HashMap();
myTable.set("lerf","opl"); myTable.set("kierf",5); myTable.set("lerf","neW");
myTable.set(324,90); myTable.set("nased","likn"); myTable.set("nemd","absc"); 
myTable.set("awsed","wde34frg"); 

//console.log(myTable.get("lerf")); console.log(myTable.get("kierf"));
//console.log(myTable.get(324));console.log(myTable.get("ik23"));
//console.log(myTable.has("ik23")); console.log(myTable.has("awsed"));
//console.log(myTable.remove("kierf")); console.log(myTable.length());//myTable.clear();
console.log(myTable.keys());console.log(myTable.values());
console.log(myTable.entries());
console.log(myTable.arr);