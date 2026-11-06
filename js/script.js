function limparMensagem()
{
    var visor = document.getElementById('resultado').innerHTML;
    if(visor == "Erro" || visor == "Nada para calcular")
    {
        document.getElementById('resultado').innerHTML = "";
    }
}
function insert(num)
{
    limparMensagem();
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('historico').innerHTML = "";
}
function back()
{
    limparMensagem();
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado && resultado != "Erro" && resultado != "Nada para calcular")
    {
        var conta = resultado.split('×').join('*').split('÷').join('/');
        try
        {
            var valor = eval(conta);
            if(valor === Infinity || valor === -Infinity || valor !== valor)
            {
                document.getElementById('historico').innerHTML = resultado + " =";
                document.getElementById('resultado').innerHTML = "Erro";
            }
            else
            {
                document.getElementById('historico').innerHTML = resultado + " =";
                document.getElementById('resultado').innerHTML = Math.round(valor * 10000000000) / 10000000000;
            }
        }
        catch(erro)
        {
            document.getElementById('historico').innerHTML = resultado + " =";
            document.getElementById('resultado').innerHTML = "Erro";
        }
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada para calcular";
    }
}

document.onkeydown = function(evento)
{
    if(evento.ctrlKey || evento.metaKey || evento.altKey)
    {
        return;
    }
    var tecla = evento.key;
    if(tecla >= "0" && tecla <= "9" && tecla.length == 1)
    {
        insert(tecla);
    }
    else if(tecla == "+" || tecla == "-")
    {
        insert(tecla);
    }
    else if(tecla == "*")
    {
        insert('×');
    }
    else if(tecla == "/")
    {
        insert('÷');
    }
    else if(tecla == "." || tecla == ",")
    {
        insert('.');
    }
    else if(tecla == "Enter" || tecla == "=")
    {
        calcular();
    }
    else if(tecla == "Backspace")
    {
        back();
    }
    else if(tecla == "Escape" || tecla == "Delete")
    {
        clean();
    }
    else
    {
        return;
    }
    evento.preventDefault();
}