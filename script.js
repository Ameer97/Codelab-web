var posting = new Vue({
    el: "#add",
    data:{
        ID:'',
        NAME:'',
        AGE:'',
        PHONE:'',
        SLALARY:'' 
    },
    methods: {
        vclickPost: function () {
            
            alert('you are Entering new employee')

            
            $.ajax({
                url: 'http://hassanhussain.com/ameer/add.php',
                type: 'POST',
                data: {
                    userId:posting.ID,
                    userName:posting.NAME,
                    userAge:posting.AGE,
                    userPhone:posting.PHONE,
                    userSalary:posting.SLALARY

                },
                success: function () {
                    
                },
                error: function(){
                
            }
            })
        }
    }

})



var geting = new Vue({
    el: '#get',
    data:{
        arr:[]
    },
    methods: {
        vclickGet: function () {
            
            
             $.ajax({
                url: 'http://hassanhussain.com/ameer/report.php',
                method: 'post',
                data:{
                     userId:1
                },

                success: function (result) {
                    geting.arr=result
                    
                    
                },
                error: function(err){
                    
            }
            })

           
        }
    },
    created: function() {
        this.vclickGet()
    }

})





        function openNav() {
            document.getElementById("mySidenav").style.width = "300px";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }