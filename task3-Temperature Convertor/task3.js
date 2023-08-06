function Convert()
{
  var temp=parseFloat(document.getElementById('temperature').value);
  var type=document.getElementById('type').value;
  var celsius=document.getElementById('celsius');
  var farenhit=document.getElementById('farenhit');
  var kelvin=document.getElementById('kelvin');


  if(type==="cs")
  {
    celsius.value=parseFloat(temp.toFixed(2));

    let fh=(temp*9)/5+32;
    farenhit.value=parseFloat(fh.toFixed(2));

    let kv=temp+273.15;
    kelvin.value=parseFloat(kv.toFixed(2));

  }
  else if(type==="fh")
  {
    farenhit.value=parseFloat(temp.toFixed(2));

    let cs=((temp-32)*5)/9;
    celsius.value=parseFloat(cs.toFixed(2));

    let kv=cs+273.15;
    kelvin.value=parseFloat(kv.toFixed(2));

  }
  else if(type==="kv")
  {

    kelvin.value=parseFloat(temp.toFixed(2));

    let cs=temp-273.15;
    celsius.value=parseFloat(cs.toFixed(2));

    let fh=(temp-273.15)*9/5+32;
    farenhit.value=parseFloat(fh.toFixed(2));

  }
}
function Resetfun()
{
    document.getElementById('temperature').value='';
    document.getElementById('type').value='';
    document.getElementById('celsius').value='';
    document.getElementById('farenhit').value='';
    document.getElementById('kelvin').value='';

}
