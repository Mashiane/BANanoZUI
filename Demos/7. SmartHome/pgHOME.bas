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
	comp.Initialize(Me, "home", "home")
	
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "homeview", "homeview")
	zview.AddText("11:53 PM").AddBR
	zview.AddText("Monday, Oct.").AddBR.AddBR
	zview.AddElement("", "h1", Null, Null, Null, Null, "Night mode").AddBR
	zview.AddText("Outside 29˚C, sunny").AddBR
	zview.AddText("Inside 25˚C")
	'add a slot extension, we will out slots here
	zview.AddDivSlotExtension  ' the name will be 'homeviewslot'
	zview.AddToPlaceholder
	'build component from placeholder and
	'add spot to open the status slide
	Dim status As ZUIZspot
	status.Initialize(Me, "status", "status")
	status.BackgroundColor = sh.COLOR_ORANGE
	status.BorderWidth = "4px"
	status.BorderColor = "var(--background-color)"
	status.angle = -145
	status.Size = zui.SIZE_M
	status.Distance = 120
	status.ToView = "status"
	status.AddIcon("var(--accent-text-color)", "fas fa-bell")
	status.AddSpan("var(--accent-text-color)", "15")
	'add this spot to the div slot we created above
	status.AddToViewSlot(zview)
	'
	'add spot to open up family
	Dim family As ZUIZspot
	family.Initialize(Me, "family", "family")
	family.angle = -30
	family.Size = zui.SIZE_S
	family.Distance = 120
	family.Label = "Family"
	family.labelpos = zui.POS_RIGHT 
	family.ToView = "family"
	family.AddIcon("", "fa fa-map-marker-alt")
	family.AddToViewSlot(zview)
	'
	'add spot to open up scenes
	Dim scenes As ZUIZspot
	scenes.Initialize(Me, "scenes", "scenes")
	scenes.Angle = 0
	scenes.Size = zui.SIZE_S
	scenes.Distance = 120
	scenes.label = "Scenes"
	scenes.LabelPos = zui.POS_RIGHT
	scenes.ToView = "scenes"
	scenes.Text = "4"
	scenes.AddToViewSlot(zview)
	'
	'add spot to open rooms
	Dim rooms As ZUIZspot
	rooms.Initialize(Me, "rooms", "rooms")
	rooms.Angle = 30
	rooms.size = zui.size_s
	rooms.Distance = 120
	rooms.label = "Rooms"
	rooms.LabelPos = zui.POS_RIGHT
	rooms.toview = "rooms"
	rooms.Text = "5"
	rooms.AddToViewSlot(zview)
	'
	'add spot to open devices
	Dim devices As ZUIZspot
	devices.Initialize(Me, "devices", "devices")
	devices.Angle = 60
	devices.Distance = 120
	devices.size = zui.SIZE_S 
	devices.label = "Devices"
	devices.LabelPos = zui.POS_RIGHT
	devices.toview = "Devices"
	devices.Text = "45"
	devices.AddToViewSlot(zview)
	'
	'add spot to go to settings
	Dim settings As ZUIZspot
	settings.Initialize(Me, "settings", "settings")
	settings.Angle = 150
	settings.Distance = 120
	settings.Size = zui.SIZE_S
	settings.Label = "Settings"
	settings.ToView = "settings"
	settings.AddIcon("", "fas fa-sliders-h")
	settings.AddToViewSlot(zview)
	
	'add the component to the app
	sh.AddComponentZUI(comp)

End Sub