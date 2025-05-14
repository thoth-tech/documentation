## Spike Outcomes

---

**Title:** Extending SplashKit Library to Support Raspberry Pi 5 and Generic Linux SBCs

**Author:** Jonathan Tynan

## Goals / Deliverables

- This report documenting findings and recommendations.

## Tasks undertaken

- Confirming that pigpio does not support Raspberry Pi 5.
- Develop overview of major projects that fit our requirements.
- Explored gpiod/libgpiod for GPIO control on Raspberry Pi 5.
- Investigated lgpio/rgpio for remote GPIO operations and PWM support.
- Evaluating the availability and suitability of C/C++ bindings for each library.

## What we found out

Through this spike, we explored various libraries and interfaces for GPIO and PWM control across Raspberry Pi 5 and generic Linux SBCs. Below are our detailed findings:

### [WiringPi](https://github.com/WiringPi/WiringPi/)

- Pros:
  - Supports both GPIO and PWM operations on Raspberry Pi models, including the Raspberry Pi 5.
  - Offers a simple interface well-suited to SplashKit's existing structure, facilitating straightforward integration.
  - Community-driven forks are still maintained, providing ongoing updates.
- Cons:
  - Lacks support for remote GPIO operations, a crucial feature for SplashKit.
  - Since the original project was deprecated, relying on community-maintained forks raises concerns about long-term support and stability.
  - May not be a reliable choice for future development due to potential abandonment.

### [lgpio/rgpio](https://github.com/joan2937/lg)

- Pros:
  - Developed by the same creator as pigpio, offering a familiar interface and functionality.
  - Supports remote GPIO operations out-of-the-box, aligning with SplashKit's requirements.
  - Provides basic PWM functionality.
  - Compatible with the Raspberry Pi 5 and a range of Linux SBCs beyond Raspberry Pi.
  - Has C/C++ bindings suitable for our project.
- Cons:
  - Being a newer project, it lacks the maturity and extensive community support of pigpio.
  - Potential risks in terms of long-term support and unanticipated bugs.
  - Limited documentation could extend the integration and development timeline.

### [gpiod/libgpiod](https://github.com/brgl/libgpiod)

- Pros:
  - The new Linux kernel interface for GPIO control, providing a unified approach across different Linux-based SBCs.
  - Offers broad compatibility with modern Linux systems, making it future-proof.
  - Supports Raspberry Pi 5 and generic SBCs.
  - Provides C bindings compatible with our C/C++ project.
- Cons:
  - Integration may be complex due to structural differences from SplashKit’s current setup, requiring significant refactoring.
  - Does not natively support PWM; implementing PWM would require a custom solution using the sysfs interface or gpiomem, which are more complex and less performant.
  - Lacks remote GPIO support, limiting its utility in replacing pigpio in SplashKit.
 
These libraries, in the writers opinion, are currently the most suitable for enable GPIO operations on the Raspberry Pi 5, and potentially on other linux SBC's.
Whether they are ready for integration into SplashKit, is another question entirely. 

## Open issues/risks

- PWM Functionality:
  - Implementing PWM with gpiod/libgpiod requires a custom solution, potentially leading to increased complexity and maintenance overhead.
  - The performance of such a custom implementation may not meet SplashKit's requirements.

- Remote GPIO Operations:
  - Maintaining remote GPIO capabilities is crucial for SplashKit.
  - WiringPi and gpiod/libgpiod lack this feature, necessitating either a hybrid approach or alternative libraries.

- Library Maturity and Support:
  - Both lgpio/rgpio and gpiod/libgpiod are relatively new, and this may pose risks regarding long-term support.
  - Limited documentation might increase the learning curve and integration time.


## Recommendations

- Further Evaluation of lgpio/rgpio:
  - Given its support for GPIO control, remote operations, PWM functionality, and C/C++ bindings, lgpio/rgpio is a strong candidate.
  - Conduct comprehensive testing to assess performance, stability, and compatibility with SplashKit.
  
- Explore Alternatives:
  - This is by no means an exhaustive list of options; other libraries may better fulfill SplashKit's requirements.
  - Investigate additional libraries that can provide the needed functionalities, possibly with more mature ecosystems.

- Additional Spikes and Testing:
  - Plan further spikes focused on integrating and testing different GPIO libraries.
  - Perform performance benchmarking, especially for time-sensitive operations like PWM and remote GPIO control.

- Long-Term Strategy:
  - Monitor updates to pigpio or its forks for potential future support of Raspberry Pi 5 and generic SBCs.
  - Stay informed about emerging libraries and technologies that could meet SplashKit's evolving requirements.
  
  
## Additional Resources

- [lgpio/rgpio website](https://abyz.me.uk/lg/index.html)
- [gpiod/libgpiod additional information](https://docs.kernel.org/userspace-api/gpio/chardev.html) 
  - Note: libgpiod is the library provided by the kernel to interact with the linux GPIO character device.
- [Additional Linux Kernel GPIO drivers](https://docs.kernel.org/driver-api/gpio/drivers-on-gpio.html)

