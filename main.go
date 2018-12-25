package main

import (
	"fmt"

	"github.com/manifoldco/promptui"
	"github.com/pkg/browser"
)

func main() {
	fmt.Println(" Hi! I'm natumn.\n Develop server side and complier. Like Go and Haskell.")

	prompt := promptui.Select{
		Label: "menu",
		Items: []string{"web site", "github", "twitter", "blog", "exit"},
	}
EXIT:
	for {
		_, result, err := prompt.Run()

		if err != nil {
			fmt.Printf("Prompt failed %v\n", err)
			return
		}

		switch result {
		case "web site":
			browser.OpenURL("https://natumn.github.io")
		case "github":
			browser.OpenURL("https://github.com/natumn")
		case "twitter":
			browser.OpenURL("https://twitter.com/natumndb")
		case "blog":
			browser.OpenURL("http://nktafuse.hatenablog.com/")
		case "exit":
			break EXIT
		}
	}
}
