# Docker Documentation and Research (WIP) T1-2022

- [Back to Jupyter Notebook Documentation Index](./Index.md)

## Conversion Relating to Docker Processes

[<img src="./docker_flow.png" />](./docker_flow.png)

The API container gets the input file from the frontend. If this input file needs to be converted, the API container will first put it into a location **known** to the conversion container (i.e., a *temp* directory in a shared volume). The shared *temp* directory ensures that both the API container **and** the conversion container have read and write access to the input and output files.
Note that this *temp* directory will be the shared volume specified in `docker-compose.yml`.

The API container will then: tell the conversion container to start, perform the conversion process, and then `exit`. Note that the conversion process will read from the *temp* directory and write the output to the *temp* directory.

The entire bash script might look something like this:

```sh
cp input-file /temp-directory # copy the input file into the shared directory 
docker run --rm conversion-image bash -c "convert temp-directory/input-file" # run the conversion container with the command to convert
rm temp-directory/input-file # remove the input file after it has been converted
```

**How do we tell the API container whether it was a success or failure??? Need more research into this**

If the file conversion was a success, the API container will then read the output file from the temp directory and pass it on to the next steps.
The files in the *temp* directory can now be safely removed by the API container to free up space for the next conversion.


 

