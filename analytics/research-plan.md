# AP Econ Oasis — Product Analytics Research Plan

## 1. Project Background

AP Econ Oasis is an AI-assisted educational website I created based on my handwritten AP Microeconomics and Macroeconomics notes from Grade 11.

The website provides study notes, economic graphs, MCQ practice, FRQ self-check exercises, and additional learning resources.

After building the website and receiving feedback from several students, I became interested in understanding how people actually use it and how data analysis could help improve the learning experience.

This project is my first attempt to explore product analytics using a real product I have developed.

## 2. Research Objectives

The project has three main objectives:

1. **User Acquisition:** Understand how students discover the website and whether sharing learning resources on social media is associated with increased visits.
2. **User Engagement:** Explore which learning materials attract interest and how visitors interact with different pages and features.
3. **Product Improvement:** Identify potential usability issues and use data and student feedback to guide improvements.

## 3. Research Questions

### Phase 1 — User Acquisition

**RQ1:** Does promoting AP Econ Oasis on Rednote coincide with increased website visits?

**RQ2:** Which traffic sources bring visitors to the website?

### Phase 2 — User Engagement

**RQ3:** Which learning modules and resources attract the most interest?

**RQ4:** How easily can visitors find relevant learning materials from the homepage?

**RQ5:** Do mobile and desktop users navigate the website differently?

### Phase 3 — Product Improvement

**RQ6:** What difficulties do students experience when using the website?

**RQ7:** After implementing a product improvement, is there evidence of better resource discovery or engagement?

## 4. Initial Observations

**Source:** Lovable Analytics dashboard

**Recorded date:** October 31, 2026

**Reporting period:** Last 90 days

### Website Traffic

| Metric           | Value |
| ---------------- | ----- |
| Recorded visits  | 76    |
| Social visits    | 39    |
| Direct visits    | 37    |
| Instagram visits | 25    |
| Facebook visits  | 7     |
| LinkedIn visits  | 6     |
| ChatGPT visits   | 1     |

### Page Activity

| Page                               | Recorded page views |
| ---------------------------------- | ------------------- |
| Homepage (`/`)                     | 74                  |
| About (`/about`)                   | 12                  |
| Microeconomics Unit 1 (`/micro/1`) | 12                  |
| Contact (`/contact`)               | 5                   |
| Microeconomics Unit 2 (`/micro/2`) | 4                   |
| Microeconomics Unit 5 (`/micro/5`) | 4                   |
| Resources (`/resources`)           | 3                   |

### Visitor Devices

- Desktop: 56.0%
- Mobile: 42.7%
- Tablet: 1.3%

### Initial Interpretations

- Social media has already contributed to recorded website traffic, particularly Instagram.
- The homepage has substantially more recorded views than individual learning pages.
- A considerable proportion of visits are from mobile devices, making mobile usability worth investigating.

These are preliminary observations, not evidence that any particular feature is successful or unsuccessful.

### Data Limitations

- Visits represent sessions, not necessarily unique users.
- Some visits may come from my own testing or website development.
- Lovable Analytics reports a measurement change on October 26, 2026.
- Historical page view totals cannot establish navigation sequences or conversion rates.
- The current sample is small, and visitors may not represent the broader AP Economics student population.
- Existing analytics do not yet provide sufficient evidence to explain why users choose particular pages.

## 5. Hypotheses

**H1 — User Acquisition**

Sharing AP Economics learning resources on Rednote may be associated with an increase in website visits.

**H2 — Resource Discovery**

Improving navigation or the visibility of learning resources may help more visitors discover relevant study materials.

**H3 — Device Differences**

Mobile and desktop visitors may interact with the website differently.

**H4 — Student Feedback**

Direct feedback from students may reveal usability issues that are not apparent from traffic statistics alone.

All hypotheses are exploratory and have not yet been tested.

## 6. Metrics to Track

### Acquisition Metrics

- Daily website visits
- Traffic source distribution
- Visits attributed to Rednote, if tracking becomes available
- Rednote post views, likes, saves, and comments

### Engagement Metrics

- Page views by learning module
- Module opens
- Quiz starts and completions
- Homepage-to-resource discovery rate, if session-level tracking is available
- Returning visitor engagement, if measurable

### Qualitative Metrics

- Student feedback on navigation
- Difficulty finding specific topics
- Usefulness of explanations and practice questions
- Suggestions for new content or improvements

## 7. Research Methods and Tools

### Stage 1 — Baseline and Social Media Study

**Tools:** Lovable Analytics, Rednote Analytics, Microsoft Excel

1. Record current website traffic before promoting the website.
2. Publish an AP Economics resource-sharing post on Rednote.
3. Record the publication date and time.
4. Collect traffic data over the following seven days, ideally using comparable daily reporting windows.
5. Compare website visits and traffic sources with a suitable pre-publication baseline.
6. Document any observed changes and alternative explanations.

**Important:** A change in visits after publication does not establish that Rednote caused the change. Reliable source attribution would require appropriately configured tracking.

### Stage 2 — Website Engagement Analysis

**Tools:** Lovable Analytics, Python, pandas, Matplotlib

1. Examine which pages receive the most visits.
2. Explore differences between learning modules.
3. Plan privacy-conscious event tracking for module and quiz interactions.
4. Export data if supported by the selected analytics tools.
5. Clean, visualize, and interpret available data.
6. Identify potential questions for further investigation.

### Stage 3 — Student Usability Research

**Tools:** Short feedback questionnaire, Excel

1. Invite approximately five current or former AP Economics students to test the website voluntarily.
2. Ask participants to find a specific learning topic and attempt a practice question.
3. Collect feedback about navigation, explanations, and usability.
4. Identify recurring issues without assuming the small sample is representative.
5. Prioritize one improvement based on the findings.

### Stage 4 — Product Improvement and Evaluation

1. Select one evidence-supported product improvement.
2. Document the original problem and proposed solution.
3. Implement the change.
4. Measure relevant metrics before and after implementation, where feasible.
5. Discuss findings, uncertainty, and limitations.

## 8. Next Steps

### Immediate Priorities

- [x] Save the October 31 Lovable Analytics baseline.
- [x] Publish the first Rednote resource-sharing post.
- [x] Record Rednote publication time and post metrics.
- [x] Create a simple Excel traffic tracking sheet.
- [ ] Check and fix any broken website links.

### When More Time Is Available

- [ ] Test website navigation on mobile.
- [ ] Plan privacy-conscious event tracking.
- [ ] Conduct usability tests with approximately five students.
- [ ] Analyze real usage data using Python and pandas.
- [ ] Document initial findings and limitations.
- [ ] Implement one evidence-based improvement.
- [ ] Evaluate the outcome.

## 9. Expected Deliverables

The project aims to produce:

1. A documented product analytics research plan.
2. A small dataset of website traffic and acquisition metrics.
3. Exploratory analysis using Excel and, where feasible, Python.
4. Data visualizations and a summary of findings.
5. A user-feedback and usability analysis.
6. A documented product improvement and evaluation.

## 10. Project Status

**Status:** Initial planning and exploratory baseline analysis.

The website is live and has received some visits and student feedback.

The Rednote promotion study is planned, but follow-up data have not yet been collected.

No formal product experiment or causal analysis has been completed.
