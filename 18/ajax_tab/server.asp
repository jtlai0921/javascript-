<?xml version="1.0" encoding="gb2312"?>
<%
Response.CacheControl="no-cache"
Response.AddHeader "pragma","no-cache"
'Response.AddHeader "Content-Type","text/html;charset=gb2312"
Response.Expires = -1
Response.ExpiresAbsolute = now - 1
Response.ContentType = "text/xml"

set conn = Server.CreateObject("adodb.connection")
data = Server.mappath("data.mdb")
conn.Open "driver={microsoft access driver (*.mdb)};"&"dbq="&data
n=CInt(Request("n"))
if  n = 1 then 
	str = "�ݩ�"
else
	str = "��k"
end if
%>
<% 
set rs = Server.CreateObject("adodb.recordset")
sql ="select * from xmlhttp where class = '"&str&"' order by id desc"
rs.open sql,conn,1,1
%>
<data count="<%=n%>" >
<%
n=0
while (not rs.eof)
%>
    <item>
         <who><%=trim(rs("who")) %></who>
		 <class><%=trim(rs("class")) %></class>
		 <what><%=trim(rs("what")) %></what>
    </item>
<%
	n = n + 1
	rs.movenext
wend
%>
</data>
