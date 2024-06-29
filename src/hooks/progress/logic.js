const valuelogic = (setValue) =>{
    let timer;
    timer = setInterval(() => {
        setValue((prev)=>{
            if(prev==100){
                clearTimeout(timer);
                return prev;
            }
            return prev+1;
        });  
    },100);
}

export default valuelogic;