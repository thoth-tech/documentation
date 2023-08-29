---

title: FAQs on Splashkit installation tags: faq,error,troubleshoot

---

<h1> Issue : Windows </h1>

## "`bash <(curl -s https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh)`" does nothing:

![](https://i.imgur.com/c6ejBFS.png?1)

## Solutions

1.  Solution 1:

    Make sure you are connected to the internet.

1.  Solution 2:

    Disable your computer’s firewall.

1.  Solution 3: Go to this URL:
    [here](https://github.com/splashkit/skm/blob/master/install-scripts/skm-install.sh)

        Then click the “Download raw file” button shown below (where the red arrow is pointing
        to) and save it to somewhere like the Downloads folder:

        ![](https://i.imgur.com/MWhWHRO.png)

        Then open File Explorer to wherever you saved it.

    In the MINGW64 terminal, type `bash` and then drag and drop the file from File Explorer into the
    terminal window:

        ![](https://i.imgur.com/ZbcghXz.png)

        Press "`Enter`" and that should run the script. That will install skm, and you can carry on in the

    tutorial from after the "`bash <( curl -s....)`" step.
