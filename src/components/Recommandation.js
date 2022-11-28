function Recommandation(){
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >=2 && currentMonth <= 5
    if(!isSpring){
        return <div>On est pas encore en printemps</div>
    }else{
        return <div>C'est le printemps, Remportez </div>
    }
}

export default Recommandation