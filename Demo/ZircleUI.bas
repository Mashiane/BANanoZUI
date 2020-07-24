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

Sub SetView(view As String) As ZircleUI
	z.RunMethod("setView", Array(view))
	Return Me
End Sub