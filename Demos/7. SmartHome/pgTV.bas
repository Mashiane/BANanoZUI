B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.5
@EndOfDesignText@
'Static code module
Sub Process_Globals
	Private BANano As BANano   'ignore
	Private sh As VueApp
	Public zui As ZircleUI
End Sub


Sub Initialize
	'get the reference of the app
	sh = pgIndex.myapp
	zui = pgIndex.zui
	'define the component
	Dim comp As VMElement
	'initialie the component
	comp.Initialize(Me, "tv", "tv")
	
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "tvview", "tvsview")
	zview.AddDivSlotExtension
	zview.AddToPlaceholder
	'
	Dim ziframe As ZUIZiframe
	ziframe.Initialize(Me, "ziframe", "ziframe")
	ziframe.SlotMedia
	ziframe.Width = "100%"
	ziframe.Height = "100%"
	ziframe.Src = "https://www.youtube.com/embed/aJOTlE1K90k"
	ziframe.AddAttr("frameborder", "0")
	ziframe.Allowfullscreen = True
	ziframe.Text = "Channel 9"
	ziframe.AddToView(zview)
	'
	Dim plus As ZUIZspot = zui.CreateSpot(Me, "plus", "", "", "s", "130", "-15", "", "+")
	plus.Button = True
	plus.AddToViewSlot(zview)
	'
	Dim minus As ZUIZspot = zui.CreateSpot(Me, "minus", "", "", "s", "130", "15", "", "-")
	minus.button = True
	minus.AddToViewSlot(zview)
	'
	Dim poweroff As ZUIZspot = zui.CreateSpot(Me, "poweroff", "","","s","110","-45","","")
	poweroff.AddClass("success")
	poweroff.Button = True
	poweroff.AddIcon("", "fa fa-power-off")
	poweroff.AddToViewSlot(zview)
	'
	Dim volume As ZUIZspot = zui.CreateSpot(Me, "volume", "vol","","m","100","135","","")
	volume.progress = 14
	volume.slider = True
	volume.button = True
	volume.AddToViewSlot(zview)
	'
	Dim ch As ZUIZspot = zui.CreateSpot(Me, "ch", "ch.","","m","100","45","","")
	ch.AddClass("accent")
	ch.Button = True
	ch.AddToViewSlot(zview)

	'build component from placeholder and
	'add the component to the app
	sh.AddComponentZUI(comp)

End Sub