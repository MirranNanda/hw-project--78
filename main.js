var images = ["family.jpeg","dad.jpeg", "mom.jpeg" , "brother.jpeg"];
var names = ["Family Book","Dad", "Mom", "Rocky Singh", "Brother"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_images").src = images;
    document.getElementById("one").innerHTML = names;
}
