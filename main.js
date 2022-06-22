function insert(nun)
{
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + nun
}
function clean()
{
    document.getElementById('result').innerHTML = "";
}
function calc()
{
    var result = document.getElementById('result').innerHTML;
    if(result)
    {
        document.getElementById('result').innerHTML = eval(result);
    }
    else
    {
        document.getElementById('result').innerHTML = "No Result"
    }
}