B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=Class
Version=8.5
@EndOfDesignText@
#IgnoreWarnings:12
Sub Class_Globals
	Private z As BANanoObject
End Sub

Public Sub Initialize(zui As BANanoObject) As ZircleUI
	z = zui
	Return Me
End Sub

Sub SetView(View As String) As ZircleUI
	z.RunMethod("setView", Array(View))
	Return Me
End Sub

Sub ToView(view As String) As ZircleUI
	z.RunMethod("toView", Array(view))
	Return Me
End Sub

Sub GetParams(prop As String) As BANanoObject
	Dim bo As BANanoObject
	Dim item As BANanoObject
	'
	bo = z.RunMethod("getParams", Null)
	item = bo.GetField(prop)
	Return item
End Sub