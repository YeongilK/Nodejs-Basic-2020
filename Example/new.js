var table ='';
var rows =8;
var cols=8;
for (var r = 0; r<rows;r++){
    table +='<tr>';
        for(var c=0;c<cols;c++){
            table+='<td>' +''+'</td>';
        }
    table+='</tr>';
}
console.log(`<table>\n${table}\n</table>`);