
// what goes in the blender

var upper_char_list = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var lower_char_list = "abcdefghijklmnopqrstuvwxyz";
var num_list        = "0123456789";
var sym_list        = "!@#\$%^&*_,./?;:"

// what gets selected

var up = '';
var lo = '';
var nu = '';
var sy = '';

// selected arrays
var upp = [];
var low = [];
var num = [];
var sym = [];

// the end result
var password = [];
var the_password = '';

var pass_item_types = Number;
var pass_length_obj = Number;


                                        //Establishing password length as number and distibution of char types
var pass_length = function() {
    pass_length_obj = parseInt(prompt("how long do you want your password to be", "8-20"));
    
    if ( 7<pass_length_obj && pass_length_obj<=20 && pass_length_obj>0)
    {
        console.log(pass_length_obj);
        pass_item_types = 0;


                                                                //Setting up even distribution of char types                                                                    
        up = confirm("Do you want Uppercase characters?");
        if (up==true){pass_item_types++;};

        lo = confirm("Do you want lowercase characters?");
        if (lo==true){pass_item_types++;};

        nu = confirm("Do you want numeric characters?");
        if (nu==true){pass_item_types++;};
        
        sy = confirm("Do you want symbols?");
        if (sy==true){pass_item_types++;};

        pass_item_types/2;

                                                        //Selecting characters
        selector();
    }
    else {
        alert("please try again and provide a number from 8 to 20")
    }
};

                                                    //Ensuring enough char are selected based on pass length ↓
function selector() {

    var roundup = pass_length_obj / pass_item_types;
    max_char_of_type = Math.round(roundup);
    if(!roundup % 2 == 0)
    {
        max_char_of_type +1;
    };
                                                                        // resetting array values ↓
     upp = [];
     low = [];
     num = [];
     sym = [];
                                                                         //Selecting UpperCase ↓   
    if (up === true)
    {
        for(var i = 0; i <= max_char_of_type; i++) {
            upp_temp = upper_char_list[Math.floor(Math.random() * (upper_char_list.length))];
            upp.push(upp_temp);
        };   
    }
    
                                                                        //Selecting lowerCase ↓
    if (lo == true)
    {
        for(var i = 0; i <= max_char_of_type; i++) {
            low_temp = lower_char_list[Math.floor(Math.random() * (lower_char_list.length))];
            low.push(low_temp);
        };    
    };
                                                                        //Selecting numbers ↓
    if (nu == true)
    {
        for(var i = 0; i <= max_char_of_type; i++) {
            num_temp = num_list[Math.floor(Math.random() * (num_list.length))];
            num.push(num_temp);
        };    
    };
                                                                        //Selecting symbols ↓
    if (sy == true)
    {
        for(var i = 0; i <= max_char_of_type; i++) {
            sym_temp = sym_list[Math.floor(Math.random() * (sym_list.length))];
            sym.push(sym_temp);
        };    
    };
    compiler(); 
};

                                           //linking all the elements together ↓
function compiler()  {
    var pass = []; 
    var password_temp = pass.concat(upp, low, num, sym);

    shuffle(password_temp);
    console.log(pass_length_obj)
    password = password_temp.slice(0, pass_length_obj);

    the_password = password.join('');

    document.getElementById("demo").innerHTML = the_password;
};

                                        //shuffling the individual elements of
                                        //the password to make it more secure
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}  