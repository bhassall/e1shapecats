var participant_info_paid = {
  timeline: [{
    type: jsPsychInstructions,
    pages: function() {
      return [`
  <div style="padding-left: 50px; padding-right: 50px;">
    <div style="text-align: left;">
      <h1>Participant Information Statement</h1>
      <h2 style="color:#e1310e">Research Study: Investigating learning in autistic and non-autistic adults</h2>
      A/Prof Micah Goldwater (Responsible Researcher)<br>
      School of Psychology, Faculty of Science<br>
      Phone: +61 2 9351 5453 | Email: micah.goldwater@sydney.edu.au<br>
      Brianna Hassall (MPhil student) | Email: bhas2668@uni.sydney.edu.au<br>
      School of Psychology, Faculty of Science
    </div>
    <hr>
    <div style="text-align: left;">

      <h4 style="color:#e1310e">1. What is this study about?</h4>
      We are conducting research about whether autistic and non-autistic adults differ in how they learn and reason. The findings from this study may help inform future research and support the development of learning and assessment approaches that better reflect individual differences in reasoning styles, with the hopes of supporting learning outcomes for diverse populations. Taking part in this study is voluntary.<br><br>
      Please read this sheet carefully and ask questions about anything that you don't understand or want to know more about.

      <h4 style="color:#e1310e">2. Who is running the study?</h4>
      The study is being carried out by the following researchers:<br><br>
      <li>A/Prof Micah Goldwater, School of Psychology, University of Sydney</li>
      <li>Brianna Hassall, MPhil Student, School of Psychology, University of Sydney</li>
      <br>
      Brianna Hassall is conducting this study as a basis for a Master of Philosophy (School of Psychology) degree undertaken at the University of Sydney.<br><br>
      There are no known perceived or actual conflicts of interest for the researchers or institutions involved in the project.<br><br>
      There are no known financial benefits to the researchers or institution that might arise from the conduct of this research.

      <h4 style="color:#e1310e">3. Who can take part in the study?</h4>
      We are seeking adults aged 18 years to 65 years old to take part in this study. We are seeking participation from both autistic and non-autistic adults in order to compare different ways of learning and reasoning across individuals. Participants must be able to read and understand English and complete the study online using a computer.<br><br>
      Individuals with a diagnosed intellectual disability are not eligible to take part, as the study aims to examine learning and reasoning processes in autistic and non-autistic adults without intellectual disability, and inclusion could bias interpretation of the results.<br><br>
      To ensure the results of the study are reliable, please do not discuss the study with other people who may also take part, as this could influence their responses.

      <h4 style="color:#e1310e">4. What will the study involve for me?</h4>
      If you decide to take part in this study, you will be given a task where you are to determine how to put images into categories, and another task that tests your memory with a series of letters. Lastly, you will be asked to complete a self-report questionnaire. This includes multiple-choice questions about everyday behaviours, preferences and ways of thinking that are related to autistic traits in adults.<br><br>
      Attentional checks will be included throughout the tasks to assess data quality. These checks are used for research purposes only and do not determine payment. To check for meaningful task engagement, a minimum performance threshold will be needed on the letter memory task. Payment is contingent on completing the full study and meeting this task threshold.<br><br>
      The whole set of tasks should take no more than 45 minutes. There will be opportunities to take breaks.

      <h4 style="color:#e1310e">5. Can I withdraw once I have started?</h4>
      Being in this study is completely voluntary and you do not have to take part.<br><br>
      Your decision will not affect your current or future relationship with the researchers or anyone else at The University of Sydney.<br><br>
      If you decide to take part in the study and then change your mind, you can withdraw by closing the browser before you complete the study. The full study must be completed to receive payment.<br><br>
      If you choose to withdraw, we will stop collecting information from you. If you don't want the information already collected to be in the study results, please tell us at the time you withdraw.

      <h4 style="color:#e1310e">6. Are there any risks or costs?</h4>
      Aside from giving up your time, we do not expect that there will be any risks or costs associated with taking part in this study.

      <h4 style="color:#e1310e">7. Are there any benefits?</h4>
      For 45 minutes of participation, you will receive £4.50 (a rate of £6 per hour).

      <h4 style="color:#e1310e">8. What will happen to information that is collected?</h4>
      By providing your consent, you are agreeing to us collecting information from or about you for the purposes of this study. All results from the cognitive task and survey will be anonymous. These results will be analysed and presented to other researchers in scientific communications, but no individuals will be able to be identified in the analyses.<br><br>
      In addition, anonymous data will be stored on the Open Science Framework, an online repository for data that allows researchers to conduct novel analyses on existing data sets. No identifying information will be stored there.<br><br>
      Any identifiable information you provide us will be stored securely and will only be disclosed with your permission unless we are required by law to release information.<br><br>
      We plan to publish the study findings.<br><br>
      We will store this information and dispose of it securely following the University's Recordkeeping Policy. For more details about how your information will be handled please see the University's privacy webpage.

      <h4 style="color:#e1310e">9. Will I be told the results of the study?</h4>
      You have a right to receive feedback about the overall results of this study. If you want to receive feedback about the results of the study when it is complete, please access the link at the end of the experiment — this will be updated at the completion of experiment data collection and reporting. The results are anonymous, and so the feedback will not be about your specific results, but the study overall. This feedback will be in the form of a brief summary.

      <h4 style="color:#e1310e">10. What if I would like further information?</h4>
      When you have read this information, the following researchers will be available to discuss it with you further and answer any questions you may have:<br><br>
      <li>A/Prof Micah Goldwater, School of Psychology, contactable at micah.goldwater@sydney.edu.au</li>
      <li>Brianna Hassall, School of Psychology, contactable at bhas2668@uni.sydney.edu.au</li>

      <h4 style="color:#e1310e">11. What if I have a complaint or any concerns?</h4>
      The ethical aspects of this study have been approved by the Human Research Ethics Committee (HREC) of The University of Sydney [2026/HE000173] according to the National Statement on Ethical Conduct in Human Research (2007). If you are concerned about the way this study is being conducted or you wish to make a complaint to someone independent from the study, please contact the University:<br><br>
      Human Ethics Manager<br>
      human.ethics@sydney.edu.au<br>
      +61 2 8627 8176<br>
      <button onclick="window.print();return false;">Print</button>
      <h4 style="color:#e1310e; text-align: center;">This information sheet is for you to keep</h4>
    </div>
  </div>
      `];
    },
    show_clickable_nav: true,
    button_label_next: "Start",
    allow_backward: false
  }],
  conditional_function: function() {
    if (typeof SONAID === 'undefined') { return true; } else { return false; }
  }
};


var participant_info_SONA = {
  timeline: [{
    type: jsPsychInstructions,
    pages: function() {
      return [`
  <div style="padding-left: 50px; padding-right: 50px;">
    <div style="text-align: left;">
      <h1>Participant Information Statement</h1>
      <h2 style="color:#e1310e">Research Study: Investigating learning in autistic and non-autistic adults</h2>
      A/Prof Micah Goldwater (Responsible Researcher)<br>
      School of Psychology, Faculty of Science<br>
      Phone: +61 2 9351 5453 | Email: micah.goldwater@sydney.edu.au<br>
      Brianna Hassall (MPhil student) | Email: bhas2668@uni.sydney.edu.au<br>
      School of Psychology, Faculty of Science
    </div>
    <hr>
    <div style="text-align: left;">

      <h4 style="color:#e1310e">1. What is this study about?</h4>
      We are conducting research about whether autistic and non-autistic adults differ in how they learn and reason. The findings from this study may help inform future research and support the development of learning and assessment approaches that better reflect individual differences in reasoning styles, with the hopes of supporting learning outcomes for diverse populations. Taking part in this study is voluntary.<br><br>
      Please read this sheet carefully and ask questions about anything that you don't understand or want to know more about.

      <h4 style="color:#e1310e">2. Who is running the study?</h4>
      The study is being carried out by the following researchers:<br><br>
      <li>A/Prof Micah Goldwater, School of Psychology, University of Sydney</li>
      <li>Brianna Hassall, MPhil Student, School of Psychology, University of Sydney</li>
      <br>
      Brianna Hassall is conducting this study as a basis for a Master of Philosophy (School of Psychology) degree undertaken at the University of Sydney.<br><br>
      There are no known perceived or actual conflicts of interest for the researchers or institutions involved in the project.<br><br>
      There are no known financial benefits to the researchers or institution that might arise from the conduct of this research.

      <h4 style="color:#e1310e">3. Who can take part in the study?</h4>
      We are seeking adults aged 18 years to 65 years old to take part in this study. We are seeking participation from both autistic and non-autistic adults in order to compare different ways of learning and reasoning across individuals. Participants must be able to read and understand English and complete the study online using a computer.<br><br>
      Individuals with a diagnosed intellectual disability are not eligible to take part, as the study aims to examine learning and reasoning processes in autistic and non-autistic adults without intellectual disability, and inclusion could bias interpretation of the results.<br><br>
      To ensure the results of the study are reliable, please do not discuss the study with other people who may also take part, as this could influence their responses.

      <h4 style="color:#e1310e">4. What will the study involve for me?</h4>
      If you decide to take part in this study, you will be given a task where you are to determine how to put images into categories, and another task that tests your memory with a series of letters. Lastly, you will be asked to complete a self-report questionnaire. This includes multiple-choice questions about everyday behaviours, preferences and ways of thinking that are related to autistic traits in adults.<br><br>
      Attentional checks will be included throughout the tasks to assess data quality. These checks are used for research purposes only and do not determine payment. To check for meaningful task engagement, a minimum performance threshold will be needed on the letter memory task. Payment is contingent on completing the full study and meeting this task threshold.<br><br>
      The whole set of tasks should take no more than 45 minutes. There will be opportunities to take breaks.

      <h4 style="color:#e1310e">5. Can I withdraw once I have started?</h4>
      Being in this study is completely voluntary and you do not have to take part.<br><br>
      Your decision will not affect your current or future relationship with the researchers or anyone else at The University of Sydney.<br><br>
      If you decide to take part in the study and then change your mind, you can withdraw by closing the browser before you complete the study. The full study must be completed to receive payment.<br><br>
      If you choose to withdraw, we will stop collecting information from you. If you don't want the information already collected to be in the study results, please tell us at the time you withdraw.

      <h4 style="color:#e1310e">6. Are there any risks or costs?</h4>
      Aside from giving up your time, we do not expect that there will be any risks or costs associated with taking part in this study.

      <h4 style="color:#e1310e">7. Are there any benefits?</h4>
      Course credit will be awarded to you after your participation, as indicated by your psychology unit of study syllabus. The study will take approximately ${Math.ceil(task_time/15)*15} minutes and you will receive ${Math.ceil(task_time/15)*0.25} course credit.<br><br>
      If you do not wish to complete this study, you may obtain course credit by doing other studies on SONA or by undertaking an alternative assignment.

      <h4 style="color:#e1310e">8. What will happen to information that is collected?</h4>
      By providing your consent, you are agreeing to us collecting information from or about you for the purposes of this study. All results from the cognitive task and survey will be anonymous. These results will be analysed and presented to other researchers in scientific communications, but no individuals will be able to be identified in the analyses.<br><br>
      In addition, anonymous data will be stored on the Open Science Framework, an online repository for data that allows researchers to conduct novel analyses on existing data sets. No identifying information will be stored there.<br><br>
      Any identifiable information you provide us will be stored securely and will only be disclosed with your permission unless we are required by law to release information.<br><br>
      We plan to publish the study findings.<br><br>
      We will store this information and dispose of it securely following the University's Recordkeeping Policy. For more details about how your information will be handled please see the University's privacy webpage.

      <h4 style="color:#e1310e">9. Will I be told the results of the study?</h4>
      You have a right to receive feedback about the overall results of this study. If you want to receive feedback about the results of the study when it is complete, please access the link at the end of the experiment — this will be updated at the completion of experiment data collection and reporting. The results are anonymous, and so the feedback will not be about your specific results, but the study overall. This feedback will be in the form of a brief summary.

      <h4 style="color:#e1310e">10. What if I would like further information?</h4>
      When you have read this information, the following researchers will be available to discuss it with you further and answer any questions you may have:<br><br>
      <li>A/Prof Micah Goldwater, School of Psychology, contactable at micah.goldwater@sydney.edu.au</li>
      <li>Brianna Hassall, School of Psychology, contactable at bhas2668@uni.sydney.edu.au</li>

      <h4 style="color:#e1310e">11. What if I have a complaint or any concerns?</h4>
      The ethical aspects of this study have been approved by the Human Research Ethics Committee (HREC) of The University of Sydney [2026/HE000173] according to the National Statement on Ethical Conduct in Human Research (2007). If you are concerned about the way this study is being conducted or you wish to make a complaint to someone independent from the study, please contact the University:<br><br>
      Human Ethics Manager<br>
      human.ethics@sydney.edu.au<br>
      +61 2 8627 8176<br>
      <button onclick="window.print();return false;">Print</button>
      <h4 style="color:#e1310e; text-align: center;">This information sheet is for you to keep</h4>
    </div>
  </div>
      `];
    },
    show_clickable_nav: true,
    button_label_next: "Start",
    allow_backward: false
  }],
  conditional_function: function() {
    if (typeof SONAID === 'undefined') { return false; } else { return true; }
  }
};


var demographics = {
  timeline: [{
    type: jsPsychSurveyHtmlForm,
    preamble: "<font size='15' color='#002080'>Basic Information</font>",
    html: '<div style="text-align: left"><br><p><b>Age:</b><br><input name="age" type="number" min="17" max="100" style="width: 8em;" required></p>' +
      '<p><b>Sex:</b></p><div><input type="radio" id="male" name="sex" value="male"><label for="male">Male</label></div><div><input type="radio" id="female" name="sex" value="female"><label for="female">Female</label></div><div><input type="radio" id="other" name="sex" value="other"><label for="other">Non binary/prefer not to say</label></div>' +
      '<p><b>Do you speak English fluently?:</b></p><div><input type="radio" id="yes" name="english" value="yes"><label for="yes">Yes</label></div><div><input type="radio" id="no" name="english" value="no"><label for="no">No</label></p></div></div>',
    on_finish: function(data) {
      jsPsych.data.addProperties({ age: data.response.age, sex: data.response.sex, english_fluent: data.response.english });
    },
    on_load: function() {
      document.querySelector('#jspsych-survey-html-form-next').disabled = true;
      $('input[type="radio"]').on("click", function() {
        if ($("input[name=age]").val() == '' || $("input[type=radio][name=sex]:checked").val() === undefined || $("input[type=radio][name=english]:checked").val() === undefined) { return; }
        else { document.querySelector('#jspsych-survey-html-form-next').disabled = false; }
      });
      $('input[type="number"]').on("change", function() {
        if ($("input[name=age]").val() == '' || $("input[type=radio][name=sex]:checked").val() === undefined || $("input[type=radio][name=english]:checked").val() === undefined) { return; }
        else { document.querySelector('#jspsych-survey-html-form-next').disabled = false; }
      });
    }
  }],
  conditional_function: function() {
    if (typeof SONAID != 'undefined') { return true; } else { return false; }
  }
};


var debrief_statement = {
  timeline: [{
    type: jsPsychInstructions,
    pages: [`
  <div style="padding-left: 50px; padding-right: 50px;">
    <div style="text-align: left;">
      <h1>Debrief Statement</h1>
      <h2 style="color:#e1310e">Research Study: Investigating learning in autistic and non-autistic adults</h2>
      A/Prof Micah Goldwater (Responsible Researcher)<br>
      School of Psychology, Faculty of Science<br>
      Phone: +61 2 9351 5453 | Email: micah.goldwater@sydney.edu.au<br>
      Brianna Hassall (MPhil student) | Email: bhas2668@uni.sydney.edu.au
    </div>
    <hr>
    <div style="text-align: left;">
      Thank you for completing this study.<br><br>
      [DEBRIEF TEXT TO BE ADDED]<br><br>
      If you have any questions, now or at a later time, please feel free to contact:<br><br>
      <li>A/Prof Micah Goldwater: micah.goldwater@sydney.edu.au</li>
      <li>Brianna Hassall: bhas2668@uni.sydney.edu.au</li>
      <br>
      The ethical aspects of this study have been approved by the Human Research Ethics Committee (HREC) of The University of Sydney [2026/HE000173] according to the National Statement on Ethical Conduct in Human Research (2007).<br><br>
      If you are concerned about the way this study is being conducted or you wish to make a complaint to someone independent from the study, please contact the University:<br><br>
      Human Ethics Manager<br>
      human.ethics@sydney.edu.au<br>
      +61 2 8627 8176<br>
      <button onclick="window.print();return false;">Print</button>
      <h4 style="color:#e1310e; text-align: center;">This debrief statement is for you to keep</h4>
    </div>
  </div>
    `],
    show_clickable_nav: true,
    button_label_next: "Continue",
    allow_backward: false
  }],
  conditional_function: function() {
    if (typeof SONAID === 'undefined') { return false; } else { return true; }
  }
};


var study_complete_notification = {
  timeline: [{
    type: jsPsychInstructions,
    pages: [`You have completed the study. Please notify the experimenter now.`]
  }],
  conditional_function: function() {
    if (typeof in_lab !== "undefined" && in_lab === true) { return true; } else { return false; }
  }
};


var DEBRIEF_SONA = {
  timeline: [debrief_statement, study_complete_notification]
};

var participant_info_paid = {
  timeline: [{
    type: jsPsychInstructions,
    pages: function() {
      return [`
  <div style="padding-left: 50px; padding-right: 50px;">
    <div style="text-align: left;">
      <h1>Participant Information Statement</h1>
      <h2 style="color:#e1310e">Research Study: Investigating learning in autistic and non-autistic adults</h2>
      A/Prof Micah Goldwater (Responsible Researcher)<br>
      School of Psychology, Faculty of Science<br>
      Phone: +61 2 9351 5453 | Email: micah.goldwater@sydney.edu.au<br>
      Brianna Hassall (MPhil student) | Email: bhas2668@uni.sydney.edu.au<br>
      School of Psychology, Faculty of Science
    </div>
    <hr>
    <div style="text-align: left;">

      <h4 style="color:#e1310e">1. What is this study about?</h4>
      We are conducting research about whether autistic and non-autistic adults differ in how they learn and reason. The findings from this study may help inform future research and support the development of learning and assessment approaches that better reflect individual differences in reasoning styles, with the hopes of supporting learning outcomes for diverse populations. Taking part in this study is voluntary.<br><br>
      Please read this sheet carefully and ask questions about anything that you don't understand or want to know more about.

      <h4 style="color:#e1310e">2. Who is running the study?</h4>
      The study is being carried out by the following researchers:<br><br>
      <li>A/Prof Micah Goldwater, School of Psychology, University of Sydney</li>
      <li>Brianna Hassall, MPhil Student, School of Psychology, University of Sydney</li>
      <br>
      Brianna Hassall is conducting this study as a basis for a Master of Philosophy (School of Psychology) degree undertaken at the University of Sydney.<br><br>
      There are no known perceived or actual conflicts of interest for the researchers or institutions involved in the project.<br><br>
      There are no known financial benefits to the researchers or institution that might arise from the conduct of this research.

      <h4 style="color:#e1310e">3. Who can take part in the study?</h4>
      We are seeking adults aged 18 years to 65 years old to take part in this study. We are seeking participation from both autistic and non-autistic adults in order to compare different ways of learning and reasoning across individuals. Participants must be able to read and understand English and complete the study online using a computer.<br><br>
      Individuals with a diagnosed intellectual disability are not eligible to take part, as the study aims to examine learning and reasoning processes in autistic and non-autistic adults without intellectual disability, and inclusion could bias interpretation of the results.<br><br>
      To ensure the results of the study are reliable, please do not discuss the study with other people who may also take part, as this could influence their responses.

      <h4 style="color:#e1310e">4. What will the study involve for me?</h4>
      If you decide to take part in this study, you will be given a task where you are to determine how to put images into categories, and another task that tests your memory with a series of letters. Lastly, you will be asked to complete a self-report questionnaire. This includes multiple-choice questions about everyday behaviours, preferences and ways of thinking that are related to autistic traits in adults.<br><br>
      Attentional checks will be included throughout the tasks to assess data quality. These checks are used for research purposes only and do not determine payment. To check for meaningful task engagement, a minimum performance threshold will be needed on the letter memory task. Payment is contingent on completing the full study and meeting this task threshold.<br><br>
      The whole set of tasks should take no more than 45 minutes. There will be opportunities to take breaks.

      <h4 style="color:#e1310e">5. Can I withdraw once I have started?</h4>
      Being in this study is completely voluntary and you do not have to take part.<br><br>
      Your decision will not affect your current or future relationship with the researchers or anyone else at The University of Sydney.<br><br>
      If you decide to take part in the study and then change your mind, you can withdraw by closing the browser before you complete the study. The full study must be completed to receive payment.<br><br>
      If you choose to withdraw, we will stop collecting information from you. If you don't want the information already collected to be in the study results, please tell us at the time you withdraw.

      <h4 style="color:#e1310e">6. Are there any risks or costs?</h4>
      Aside from giving up your time, we do not expect that there will be any risks or costs associated with taking part in this study.

      <h4 style="color:#e1310e">7. Are there any benefits?</h4>
      For 45 minutes of participation, you will receive £4.50 (a rate of £6 per hour).

      <h4 style="color:#e1310e">8. What will happen to information that is collected?</h4>
      By providing your consent, you are agreeing to us collecting information from or about you for the purposes of this study. All results from the cognitive task and survey will be anonymous. These results will be analysed and presented to other researchers in scientific communications, but no individuals will be able to be identified in the analyses.<br><br>
      In addition, anonymous data will be stored on the Open Science Framework, an online repository for data that allows researchers to conduct novel analyses on existing data sets. No identifying information will be stored there.<br><br>
      Any identifiable information you provide us will be stored securely and will only be disclosed with your permission unless we are required by law to release information.<br><br>
      We plan to publish the study findings.<br><br>
      We will store this information and dispose of it securely following the University's Recordkeeping Policy. For more details about how your information will be handled please see the University's privacy webpage.

      <h4 style="color:#e1310e">9. Will I be told the results of the study?</h4>
      You have a right to receive feedback about the overall results of this study. If you want to receive feedback about the results of the study when it is complete, please access the link at the end of the experiment — this will be updated at the completion of experiment data collection and reporting. The results are anonymous, and so the feedback will not be about your specific results, but the study overall. This feedback will be in the form of a brief summary.

      <h4 style="color:#e1310e">10. What if I would like further information?</h4>
      When you have read this information, the following researchers will be available to discuss it with you further and answer any questions you may have:<br><br>
      <li>A/Prof Micah Goldwater, School of Psychology, contactable at micah.goldwater@sydney.edu.au</li>
      <li>Brianna Hassall, School of Psychology, contactable at bhas2668@uni.sydney.edu.au</li>

      <h4 style="color:#e1310e">11. What if I have a complaint or any concerns?</h4>
      The ethical aspects of this study have been approved by the Human Research Ethics Committee (HREC) of The University of Sydney [2026/HE000173] according to the National Statement on Ethical Conduct in Human Research (2007). If you are concerned about the way this study is being conducted or you wish to make a complaint to someone independent from the study, please contact the University:<br><br>
      Human Ethics Manager<br>
      human.ethics@sydney.edu.au<br>
      +61 2 8627 8176<br>
      <button onclick="window.print();return false;">Print</button>
      <h4 style="color:#e1310e; text-align: center;">This information sheet is for you to keep</h4>
    </div>
  </div>
      `];
    },
    show_clickable_nav: true,
    button_label_next: "Start",
    allow_backward: false
  }],
  conditional_function: function() {
    if (typeof SONAID === 'undefined') { return true; } else { return false; }
  }
};


var participant_info_SONA = {
  timeline: [{
    type: jsPsychInstructions,
    pages: function() {
      return [`
  <div style="padding-left: 50px; padding-right: 50px;">
    <div style="text-align: left;">
      <h1>Participant Information Statement</h1>
      <h2 style="color:#e1310e">Research Study: Investigating learning in autistic and non-autistic adults</h2>
      A/Prof Micah Goldwater (Responsible Researcher)<br>
      School of Psychology, Faculty of Science<br>
      Phone: +61 2 9351 5453 | Email: micah.goldwater@sydney.edu.au<br>
      Brianna Hassall (MPhil student) | Email: bhas2668@uni.sydney.edu.au<br>
      School of Psychology, Faculty of Science
    </div>
    <hr>
    <div style="text-align: left;">

      <h4 style="color:#e1310e">1. What is this study about?</h4>
      We are conducting research about whether autistic and non-autistic adults differ in how they learn and reason. The findings from this study may help inform future research and support the development of learning and assessment approaches that better reflect individual differences in reasoning styles, with the hopes of supporting learning outcomes for diverse populations. Taking part in this study is voluntary.<br><br>
      Please read this sheet carefully and ask questions about anything that you don't understand or want to know more about.

      <h4 style="color:#e1310e">2. Who is running the study?</h4>
      The study is being carried out by the following researchers:<br><br>
      <li>A/Prof Micah Goldwater, School of Psychology, University of Sydney</li>
      <li>Brianna Hassall, MPhil Student, School of Psychology, University of Sydney</li>
      <br>
      Brianna Hassall is conducting this study as a basis for a Master of Philosophy (School of Psychology) degree undertaken at the University of Sydney.<br><br>
      There are no known perceived or actual conflicts of interest for the researchers or institutions involved in the project.<br><br>
      There are no known financial benefits to the researchers or institution that might arise from the conduct of this research.

      <h4 style="color:#e1310e">3. Who can take part in the study?</h4>
      We are seeking adults aged 18 years to 65 years old to take part in this study. We are seeking participation from both autistic and non-autistic adults in order to compare different ways of learning and reasoning across individuals. Participants must be able to read and understand English and complete the study online using a computer.<br><br>
      Individuals with a diagnosed intellectual disability are not eligible to take part, as the study aims to examine learning and reasoning processes in autistic and non-autistic adults without intellectual disability, and inclusion could bias interpretation of the results.<br><br>
      To ensure the results of the study are reliable, please do not discuss the study with other people who may also take part, as this could influence their responses.

      <h4 style="color:#e1310e">4. What will the study involve for me?</h4>
      If you decide to take part in this study, you will be given a task where you are to determine how to put images into categories, and another task that tests your memory with a series of letters. Lastly, you will be asked to complete a self-report questionnaire. This includes multiple-choice questions about everyday behaviours, preferences and ways of thinking that are related to autistic traits in adults.<br><br>
      Attentional checks will be included throughout the tasks to assess data quality. These checks are used for research purposes only and do not determine payment. To check for meaningful task engagement, a minimum performance threshold will be needed on the letter memory task. Payment is contingent on completing the full study and meeting this task threshold.<br><br>
      The whole set of tasks should take no more than 45 minutes. There will be opportunities to take breaks.

      <h4 style="color:#e1310e">5. Can I withdraw once I have started?</h4>
      Being in this study is completely voluntary and you do not have to take part.<br><br>
      Your decision will not affect your current or future relationship with the researchers or anyone else at The University of Sydney.<br><br>
      If you decide to take part in the study and then change your mind, you can withdraw by closing the browser before you complete the study. The full study must be completed to receive payment.<br><br>
      If you choose to withdraw, we will stop collecting information from you. If you don't want the information already collected to be in the study results, please tell us at the time you withdraw.

      <h4 style="color:#e1310e">6. Are there any risks or costs?</h4>
      Aside from giving up your time, we do not expect that there will be any risks or costs associated with taking part in this study.

      <h4 style="color:#e1310e">7. Are there any benefits?</h4>
      Course credit will be awarded to you after your participation, as indicated by your psychology unit of study syllabus. The study will take approximately ${Math.ceil(task_time/15)*15} minutes and you will receive ${Math.ceil(task_time/15)*0.25} course credit.<br><br>
      If you do not wish to complete this study, you may obtain course credit by doing other studies on SONA or by undertaking an alternative assignment.

      <h4 style="color:#e1310e">8. What will happen to information that is collected?</h4>
      By providing your consent, you are agreeing to us collecting information from or about you for the purposes of this study. All results from the cognitive task and survey will be anonymous. These results will be analysed and presented to other researchers in scientific communications, but no individuals will be able to be identified in the analyses.<br><br>
      In addition, anonymous data will be stored on the Open Science Framework, an online repository for data that allows researchers to conduct novel analyses on existing data sets. No identifying information will be stored there.<br><br>
      Any identifiable information you provide us will be stored securely and will only be disclosed with your permission unless we are required by law to release information.<br><br>
      We plan to publish the study findings.<br><br>
      We will store this information and dispose of it securely following the University's Recordkeeping Policy. For more details about how your information will be handled please see the University's privacy webpage.

      <h4 style="color:#e1310e">9. Will I be told the results of the study?</h4>
      You have a right to receive feedback about the overall results of this study. If you want to receive feedback about the results of the study when it is complete, please access the link at the end of the experiment — this will be updated at the completion of experiment data collection and reporting. The results are anonymous, and so the feedback will not be about your specific results, but the study overall. This feedback will be in the form of a brief summary.

      <h4 style="color:#e1310e">10. What if I would like further information?</h4>
      When you have read this information, the following researchers will be available to discuss it with you further and answer any questions you may have:<br><br>
      <li>A/Prof Micah Goldwater, School of Psychology, contactable at micah.goldwater@sydney.edu.au</li>
      <li>Brianna Hassall, School of Psychology, contactable at bhas2668@uni.sydney.edu.au</li>

      <h4 style="color:#e1310e">11. What if I have a complaint or any concerns?</h4>
      The ethical aspects of this study have been approved by the Human Research Ethics Committee (HREC) of The University of Sydney [2026/HE000173] according to the National Statement on Ethical Conduct in Human Research (2007). If you are concerned about the way this study is being conducted or you wish to make a complaint to someone independent from the study, please contact the University:<br><br>
      Human Ethics Manager<br>
      human.ethics@sydney.edu.au<br>
      +61 2 8627 8176<br>
      <button onclick="window.print();return false;">Print</button>
      <h4 style="color:#e1310e; text-align: center;">This information sheet is for you to keep</h4>
    </div>
  </div>
      `];
    },
    show_clickable_nav: true,
    button_label_next: "Start",
    allow_backward: false
  }],
  conditional_function: function() {
    if (typeof SONAID === 'undefined') { return false; } else { return true; }
  }
};


var demographics = {
  timeline: [{
    type: jsPsychSurveyHtmlForm,
    preamble: "<font size='15' color='#002080'>Basic Information</font>",
    html: '<div style="text-align: left"><br><p><b>Age:</b><br><input name="age" type="number" min="17" max="100" style="width: 8em;" required></p>' +
      '<p><b>Sex:</b></p><div><input type="radio" id="male" name="sex" value="male"><label for="male">Male</label></div><div><input type="radio" id="female" name="sex" value="female"><label for="female">Female</label></div><div><input type="radio" id="other" name="sex" value="other"><label for="other">Non binary/prefer not to say</label></div>' +
      '<p><b>Do you speak English fluently?:</b></p><div><input type="radio" id="yes" name="english" value="yes"><label for="yes">Yes</label></div><div><input type="radio" id="no" name="english" value="no"><label for="no">No</label></p></div></div>',
    on_finish: function(data) {
      jsPsych.data.addProperties({ age: data.response.age, sex: data.response.sex, english_fluent: data.response.english });
    },
    on_load: function() {
      document.querySelector('#jspsych-survey-html-form-next').disabled = true;
      $('input[type="radio"]').on("click", function() {
        if ($("input[name=age]").val() == '' || $("input[type=radio][name=sex]:checked").val() === undefined || $("input[type=radio][name=english]:checked").val() === undefined) { return; }
        else { document.querySelector('#jspsych-survey-html-form-next').disabled = false; }
      });
      $('input[type="number"]').on("change", function() {
        if ($("input[name=age]").val() == '' || $("input[type=radio][name=sex]:checked").val() === undefined || $("input[type=radio][name=english]:checked").val() === undefined) { return; }
        else { document.querySelector('#jspsych-survey-html-form-next').disabled = false; }
      });
    }
  }],
  conditional_function: function() {
    if (typeof SONAID != 'undefined') { return true; } else { return false; }
  }
};


var debrief_statement = {
  timeline: [{
    type: jsPsychInstructions,
    pages: [`
  <div style="padding-left: 50px; padding-right: 50px;">
    <div style="text-align: left;">
      <h1>Debrief Statement</h1>
      <h2 style="color:#e1310e">Research Study: Investigating learning in autistic and non-autistic adults</h2>
      A/Prof Micah Goldwater (Responsible Researcher)<br>
      School of Psychology, Faculty of Science<br>
      Phone: +61 2 9351 5453 | Email: micah.goldwater@sydney.edu.au<br>
      Brianna Hassall (MPhil student) | Email: bhas2668@uni.sydney.edu.au
    </div>
    <hr>
    <div style="text-align: left;">
      Thank you for completing this study.<br><br>
      [DEBRIEF TEXT TO BE ADDED]<br><br>
      If you have any questions, now or at a later time, please feel free to contact:<br><br>
      <li>A/Prof Micah Goldwater: micah.goldwater@sydney.edu.au</li>
      <li>Brianna Hassall: bhas2668@uni.sydney.edu.au</li>
      <br>
      The ethical aspects of this study have been approved by the Human Research Ethics Committee (HREC) of The University of Sydney [2026/HE000173] according to the National Statement on Ethical Conduct in Human Research (2007).<br><br>
      If you are concerned about the way this study is being conducted or you wish to make a complaint to someone independent from the study, please contact the University:<br><br>
      Human Ethics Manager<br>
      human.ethics@sydney.edu.au<br>
      +61 2 8627 8176<br>
      <button onclick="window.print();return false;">Print</button>
      <h4 style="color:#e1310e; text-align: center;">This debrief statement is for you to keep</h4>
    </div>
  </div>
    `],
    show_clickable_nav: true,
    button_label_next: "Continue",
    allow_backward: false
  }],
  conditional_function: function() {
    if (typeof SONAID === 'undefined') { return false; } else { return true; }
  }
};


var study_complete_notification = {
  timeline: [{
    type: jsPsychInstructions,
    pages: [`You have completed the study. Please notify the experimenter now.`]
  }],
  conditional_function: function() {
    if (typeof in_lab !== "undefined" && in_lab === true) { return true; } else { return false; }
  }
};


var DEBRIEF_SONA = {
  timeline: [debrief_statement, study_complete_notification]
};


var consent_form = {
  type: jsPsychSurveyHtmlForm,
  preamble: `
    <div style="padding-left: 50px; padding-right: 50px; text-align: left;">
      <h1>Participant Consent Form</h1>
      <h2 style="color:#e1310e">Research Study: Investigating learning in autistic and non-autistic adults</h2>
      A/Prof Micah Goldwater (Responsible Researcher)<br>
      School of Psychology, Faculty of Science<br>
      Phone: +61 2 9351 5453 | Email: micah.goldwater@sydney.edu.au<br>
      Brianna Hassall (Master of Philosophy student) | Email: bhas2668@uni.sydney.edu.au
      <hr>
      <p>I agree to take part in this research study. In giving my consent, I confirm that:</p>
    </div>
  `,
  html: `
    <div style="padding-left: 50px; padding-right: 50px; text-align: left;">
      <div class="consent-item"><input type="checkbox" name="c1" required>
        <label>The details of my involvement have been explained to me, and I have been provided with a written Participant Information Statement to keep.</label></div><br>
      <div class="consent-item"><input type="checkbox" name="c2" required>
        <label>I understand the purpose of the study is to investigate differences in learning strategies for autistic and non-autistic individuals.</label></div><br>
      <div class="consent-item"><input type="checkbox" name="c3" required>
        <label>I acknowledge that the risks and benefits of participating in this study have been explained to me to my satisfaction.</label></div><br>
      <div class="consent-item"><input type="checkbox" name="c4" required>
        <label>I understand that in this study I will be required to complete two cognitive tasks and a questionnaire.</label></div><br>
      <div class="consent-item"><input type="checkbox" name="c5" required>
        <label>I understand that if I provide consent, my de-identified data may be used in future related research and may be shared with other researchers or made available in research data repositories. My identity will not be disclosed.</label></div><br>
      <div class="consent-item"><input type="checkbox" name="c6" required>
        <label>I understand that being in this study is completely voluntary.</label></div><br>
      <div class="consent-item"><input type="checkbox" name="c7" required>
        <label>I am assured that my decision to participate will not have any impact on my relationship with the research team or the University of Sydney.</label></div><br>
      <div class="consent-item"><input type="checkbox" name="c8" required>
        <label>I understand that I am free to withdraw from this study at any time and that I can choose to withdraw any information I have already provided (unless the data has already been de-identified or published).</label></div><br>
      <div class="consent-item"><input type="checkbox" name="c9" required>
        <label>I have been informed that the confidentiality of the information I provide will be protected and will only be used for purposes that I have agreed to. I understand that information identifying me will only be told to others with my permission, except as required by law.</label></div><br>
      <div class="consent-item"><input type="checkbox" name="c10" required>
        <label>I understand that the results of this study may be published, and that publications will not contain my name or any identifiable information about me.</label></div><br>
      <div class="consent-item"><input type="checkbox" name="c11" required>
        <label>I consent to my data being used in future research.</label></div><br>
      <div class="consent-item"><input type="checkbox" name="c12" required>
        <label>I understand that after I submit this consent form it will be retained by the researcher, and that I may request a copy at any time.</label></div><br>
    </div>
  `,
  button_label: "I consent to participate",
  on_load: function() {
    // Disable button until all checkboxes are ticked
    const btn = document.querySelector('#jspsych-survey-html-form-next');
    btn.disabled = true;
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', function() {
        const all = document.querySelectorAll('input[type="checkbox"]');
        const allChecked = Array.from(all).every(c => c.checked);
        btn.disabled = !allChecked;
      });
    });
  },
  on_finish: function(data) {
    data.trial_type = "Consent";
  }
};
