B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.5
@EndOfDesignText@
'Static code module
'#IgnoreWarnings:12
Sub Process_Globals
	Private BANano As BANano   'ignore
	Private sh As VueApp
	Public zui As ZircleUI
	Private homelog As List
End Sub


Sub Initialize
	'get the reference of the app
	sh = pgIndex.myapp
	zui = pgIndex.zui
	'define the component
	Dim comp As VMElement
	'initialie the component
	comp.Initialize(Me, "logs", "logs")
	'the dialog should be closed when we start
	sh.SetData("opendialog", False)
	'create some logs And save To the global state
	homelog = sh.newlist
	homelog.add("12:30pm - Mary arrived home")
	homelog.add("12:34pm - Peter arrived home")
	homelog.Add("1:30pm - Relax scene activated")
	homelog.add("1:50pm - Peter arrived home")
	homelog.Add("4:00pm - Away scene activated")
	homelog.Add("5:10pm - Movement detected")
	homelog.Add("5:10pm - Video alert sent to Peter")
	homelog.add("6:00pm - At Home scene activated")
	homelog.add("6:01pm - Ambient lights turned on")
	homelog.add("6:01pm - Playing Mary music list")
	homelog.add("6:15pm - Problem with camera device")
	homelog.Add("6:16pm - Camera is working after reset")
	homelog.Add("6:45pm - Ambient lights turned off")
	homelog.add("7:01pm - Theatre turned on")
	homelog.Add("8:00pm - Night scene activated")
	sh.SetData("homelog", homelog)
'	
		
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "logsview", "logsview")
	zview.borderwidth = "6px"
	zview.label = "Console"
	zview.LabelPos = zui.POS_TOP
	zview.AddDivSlotExtension
	zview.AddToPlaceholder
	'
	'add the logs, use a UL and LI
	Dim zul As ZUIUL
	zul.Initialize(Me, "zulu", "zulu")
	'define the list items
	'we loop through the home log
	Dim zuli As ZUILI
	zuli.Initialize(Me, "zuli", "zuli")
	zuli.VFor = "(log, index) in $store.homelog"
	zuli.Key = ":index"
	zuli.Text = "{{ log }}"
	zuli.AddStyle("line-height", "40px")
	zuli.AddStyle("border-bottom", "1px solid white")
	'add list item to the UL
	zul.AddListItem(zuli)
	'add UL to the view
	zul.AddToView(zview)
	'
	'add a zspot and a dialog
	Dim zspot As ZUIZspot
	zspot.Initialize(Me, "zspot", "zspot")
	zspot.Button = True
	'show only if there are log items
	zspot.VShow = "$store.homelog.length > 1"
	zspot.angle = 45
	zspot.size = "s"
	zspot.distance = 120
	zspot.label = "Reset"
	zspot.VOnClickNative = "cbopendialog"
	zspot.AddIcon("", "fas fa-trash")
	zspot.AddToViewSlot(zview)
	'
	'add a confirm dialog
	Dim cdialog As ZUIZdialog
	cdialog.Initialize(Me, "cdialog", "cdialog")
	cdialog.VIf = "$store.opendialog"
	cdialog.SelfClose = True
	cdialog.VOnDone = "cbclosedialog"
	cdialog.Text = "Are you sure?"
	cdialog.AddDivSlotExtension
	cdialog.AddToViewSlot(zview)
	'
	'add yes button
	Dim btnYes As ZUIZspot
	btnYes.Initialize(Me, "btnYes", "btnYes")
	btnYes.Button = True
	btnYes.AddClass("success")
	btnYes.Angle = 45
	btnYes.size = "s"
	btnYes.distance = 120
	'must fire the reset callback
	btnYes.VOnClickNative = "cbreset"
	btnYes.AddIcon("", "fas fa-check")
	btnYes.AddToDialogSlot(cdialog)
	'
'	'add no button
	Dim btnNo As ZUIZspot
	btnNo.Initialize(Me, "btnNo", "btnNo")
	btnNo.Button = True
	btnNo.AddClass("danger")
	btnNo.Angle = 135
	btnNo.size = "s"
	btnNo.distance = 120
	'must fire the reset callback
	btnNo.VOnClickNative = "cbclosedialog"
	btnNo.AddIcon("", "fas fa-times")
	btnNo.AddToDialogSlot(cdialog)
	'add dialog to view
	'register the event
	comp.setmethod(Me, "cbreset")
	comp.setmethod(Me, "cbopendialog")
	comp.setmethod(Me, "cbclosedialog")
	'build component from placeholder and
	'add the component to the app
	sh.AddComponentZUI(comp)

End Sub

'reset the logs
Sub cbreset   'IgnoreDeadCode
	'clear the log
	homelog = sh.NewList
	homelog.Add("No events available")
	'save to global state
	sh.setdata("homelog", homelog)
	'close the dialog
	sh.setdata("opendialog", False)	
End Sub


Sub cbopendialog   'IgnoreDeadCode
	sh.setdata("opendialog", True)
End Sub

Sub cbclosedialog   'IgnoreDeadCode
	sh.SetData("opendialog", False)
End Sub