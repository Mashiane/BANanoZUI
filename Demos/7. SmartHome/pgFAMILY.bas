B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.5
@EndOfDesignText@
'Static code module
Sub Process_Globals
	Private BANano As BANano  'ignore
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
	comp.Initialize(Me, "family", "family")
	comp.setdata("map", Null)
	comp.SetData("markers", sh.newlist)
	comp.SetData("active", "")
	
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "family", "family")
	zview.Label = "Leaflet Map"
	zview.AddAttr("ref", "map")
	zview.AddDivSlotMedia("100%", "100%")
	zview.ImagePath = "./assets/famlocation.jpg"
	zview.AddSectionSlotExtension
	zview.AddToPlaceholder
	'
	Dim mary As ZUIZspot = zui.CreateSpot(Me, "mary", "Mary", "top", "s", "", "-90", "", "")
	mary.Button = True
	mary.AddIcon("", "fas fa-female")
	'mary.VOnClickNative = "showme(0, 'purple')"
	mary.AddToViewSlot(zview)
'	'	
	Dim john As ZUIZspot = zui.CreateSpot(Me, "john", "John", "top", "s", "", "30", "", "")
	john.Button = True
	john.AddIcon("", "fas fa-male")
	'john.VOnClickNative = "showme(1, 'green')"
	john.AddToViewSlot(zview)
	'
	Dim peter As ZUIZspot = zui.CreateSpot(Me, "peter", "Peter", "top", "s", "", "150", "", "")
	peter.Button = True
	peter.AddIcon("", "fas fa-child")
	'peter.VOnClickNative = "showme(2, 'orange')"
	peter.AddToViewSlot(zview)
	

	'build component from placeholder and
	'add the component to the app
	sh.AddComponentZUI(comp)

End Sub