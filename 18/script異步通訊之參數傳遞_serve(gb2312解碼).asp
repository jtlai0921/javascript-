<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<%
callback = Request.QueryString("callback")
Response.AddHeader "Content-Type","text/html;charset=gb2312"
Response.Write("callback('Hi�A�j�a�n�A�ڬO�q�A�Ⱦ��ݹL�Ӫ���T�Ϫ�.')")
%>
