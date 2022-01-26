//run this script when the buton is change 
jQuery(" button.myclass/button#myid ").bind('change', function() {
  

const fi = document.getElementById(' myid ');

// Check if any file is selected.

if (fi.files.length > 0) {

    for (const i = 0; i <= fi.files.length - 1; i++) {

        const fsize = fi.files.item(i).size;

        const file = Math.round((fsize / 1024));

        // The size of the file.

        if (file >= 2048) {

            //if too big, show this message
            alert(' File too Big, please select a file less than 2mb ');

        } else if (file < 0.1000) {
            
            //if too small, show this message
            alert(' File too small, please select a file greater than 100kb ');
            
            //disabled the button
            jQuery(' button.myclass/button#myid ').prop("disabled",true);"

            //Show the message on your selected element
            jQuery(' element ').text("* file too small, please select a file greater than 100kb")

            //Remove the file who not fit the size limit
            document.getElementById(' myid ').value = "";


        } else {

            //enabled the button
            jQuery(' button.myclass/button#myid ').prop("disabled",false);

            //Remove the message on your selected element
            jQuery(' element ').text("")

        }
    }
}


});
