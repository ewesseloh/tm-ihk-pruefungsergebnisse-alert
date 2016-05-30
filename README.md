# tm-ihk-pruefungsergebnisse-alert
[Tampermonkey](https://tampermonkey.net) Script für die Überwachung der IHK Prüfungsergebnisse und alarmierung bei Verfügbarkeit

- Alles was ihr braucht ist Browser + Tampermonkey und diesen Script.
- Einmal auf der Webseite mit Ergebnissen anmelden und den "try sound" - Button betätigen (oben rechts), um zu prüfen ob der Alarm funktioniert.
- Falls ihr schon mehr Ergebnisse habt, dann müsst ihr manuell die Variable `ergebnisseSchonDa` auf die Anzahl der Ergebnisse setzen die ihr bereits habt.

Standartmässig lädt dieser Script die Seite jede Minute neu und schaut ob Ergebnisse hinzugekommen sind, falls ja, wird Sound abgespielt!

Viel Spass!
