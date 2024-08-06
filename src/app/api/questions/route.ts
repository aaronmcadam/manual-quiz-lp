export async function GET() {
  return Response.json([
    {
      question: "Which image best matches your hair loss?",
      type: "ChoiceType",
      options: [
        {
          display:
            '<img alt="Temples" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png 2x" />',
          value: "Temples",
          isRejection: false,
        },
        {
          display:
            '<img alt="Temples & Crown" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402x.png 2x"/>',
          value: "Temples & Crown",
          isRejection: false,
        },
        {
          display:
            '<img alt="Patchy" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png 2x"/>',
          value: "Patchy",
          isRejection: true,
        },
        {
          display:
            '<img alt="Moderate" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.png 2x" />',
          value: "Moderate",
          isRejection: false,
        },
        {
          display:
            '<img alt="Extensive" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.png 2x"/>',
          value: "Extensive",
          isRejection: true,
        },
        {
          display:
            '<img alt="Complete" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.png 2x" />',
          value: "Complete",
          isRejection: true,
        },
      ],
    },
    {
      question:
        "Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?",
      type: "ChoiceType",
      options: [
        {
          display: "Yes",
          value: true,
          isRejection: true,
        },
        {
          display: "No",
          value: false,
          isRejection: false,
        },
      ],
    },
    {
      question:
        "Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?",
      type: "ChoiceType",
      options: [
        {
          display: "Yes",
          value: true,
          isRejection: true,
        },
        {
          display: "No",
          value: false,
          isRejection: false,
        },
      ],
    },
  ]);
}
