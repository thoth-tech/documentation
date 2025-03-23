# OnTrack Component Review

## Team Member Name  
**Zara Danziger**  
*Student ID: s223468285*

---

## Component Name  
**Media-services**

---

## Files in this Component  
- `Media-services.Coffee`

---

## Component Purpose  
The media services component is used for managing audio recording capabilities within the OnTrack application. It uses `AudioContext` and determines the most suitable MIME type for audio recordings based on the browser’s compatibility.

---

## Screenshot  
_No Screenshot Needed_

---

## Component Outcome and Interactions  

### Expected Outcomes  
- Allows the application to start an `AudioContext` and determine the correct MIME type for the audio recording.  
- It should work across different browsers by adapting the MIME type to the browser.  
- It doesn’t handle actual media recordings but sets up the components needed for it.

### Interactions  

#### Inputs:  
- Uses `window.AudioContext` or `webkitAudioContext` if not already created.  
- Uses `Navigator.userAgent` to determine MIME type compatibility.

#### Outputs:  
- Returns the detected MIME type for the audio recording.  
- Initializes and provides an `AudioContext`.

---

## Component Migration Plan  

### Migration Steps  

1. **Review Existing Component**  
   - Go over the current component.  
   - Identify functionalities.  

2. **Set Up Environment**  
   - Ensure the environment is properly set up and working within the correct branch (`9.x`).  

3. **Create Component**  
   - Develop a new component in **Angular 17 TS**.  

4. **Migrate and Downgrade Component**  
   - Follow the migration guide steps **3 and 4** to downgrade and migrate the component.  

5. **Testing**  
   - Test the application with the new component on multiple platforms (**Google Chrome, Safari**).  
   - Fix any issues before committing any changes.  

---

## Component Checklist  

- [ ] **Ability to initialize media context**  
  - Ensure an `AudioContext` is available for processing.  

- [ ] **Succeeds when data is valid**  
  - Returns a valid MIME type based on browser compatibility.  

- [ ] **Handles errors**  
  - Handles errors when no supported MIME type is found.  

- [ ] **Audio context is reusable**  
  - Prevents multiple `AudioContext` instances from being created.  
