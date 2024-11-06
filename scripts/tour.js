const tour = new Shepherd.Tour({
  defaultStepOptions: {
    classes: 'shepherd-theme-arrows',
    scrollTo: true
  }
});

// Example of a tour step with a screenshot
tour.addStep({
  title: 'Step 1: Overview',
  text: '<img src="images/screenshot-library_marietta_edu-2024_11_06-13_09_27.png" alt="Screenshot 1" style="width:100%;">',
  attachTo: { element: '.step1-element', on: 'bottom' },
  buttons: [
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

// Add additional steps with screenshots as needed
tour.addStep({
  title: 'Step 2: Details',
  text: '<img src="images/screenshot-library_marietta_edu-2024_11_06-13_09_27.png" alt="Screenshot 2" style="width:100%;">',
  attachTo: { element: '.step2-element', on: 'right' },
  buttons: [
    {
      text: 'Back',
      action: tour.back
    },
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

// Start the tour
tour.start();
