local display = false 

RegisterCommand("skills", function(source,args)
    SetDisplay(not display)
end)

RegisterNUICallback("exit", function()
    SetDisplay(false)
end)

RegisterNUICallback("main", function()
    SetDisplay(false)
end)

RegisterNUICallback("error", function(data)
    print(data.error)
    SetDisplay(false)
end)

function SetDisplay(bool)
    display = bool
    SetNUIFocus(bool,bool)
    SendNUIMessage({
        type = "ui"
        status = bool,
    })
end


