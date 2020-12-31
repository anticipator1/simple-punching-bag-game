var app=new Vue({
    el:'#vue-app',
    data:{
        health:100,
        name:'rowan',
        ended:false,
        //check:100,
        a:0
    },
    methods:{  
        punch:function(){
           // console.log("meow");
            
            this.health-=20;
            //this.check-=10;
            this.a++;

            if(this.health<=0){
                this.ended=true;
                //this.check=100;
                this.a=0;
            }
            
        },
        restart:function(){
            this.health=100;
            this.ended=false;
            //this.check=100;
            this.a=0;
        }

    },
computed:{
    computedClass(){
        let className='';
        if(this.health==80 || this.health==60 || this.health==40 || this.health==20 || this.health==0){
          
            this.$refs.audioElm.play();
            className='bag'+this.a;
           
        }
        if(this.health==0)
        {
            console.log(this.$refs);
           // this.$refs.audioSand.duration=1;
            this.$refs.audioSand.play();
            className='burst';
        }
        return className;
       
        
    }
}
});