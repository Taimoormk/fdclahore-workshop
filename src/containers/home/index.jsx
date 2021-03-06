import React from 'react';
import { connect } from 'react-redux';
import { ResumeBlock } from '@react-pakistan/react-ui-collection/resume/resume-block';

import { Grid } from './styles';
import * as actions from './actions';
import { homeData } from './helpers';

class Home extends React.Component {

  componentDidMount() {
    const { loadHomeData } = this.props;
    loadHomeData(homeData);
  };

  render() {
    const { homeData } = this.props;
    return (
      <Grid>
        <ResumeBlock
          type={homeData[0].type}
          imageBackgroundUrl={homeData[0].imageUrl}
        />
        <ResumeBlock
          type={homeData[1].type}
          name={homeData[1].name}
          designation={homeData[1].designation}
          headline={homeData[1].headline}
          contactDetails={homeData[1].contactDetails}
        />
        <ResumeBlock
          type={homeData[2].type}
          backgroundExperience={homeData[2].backgroundExperience}
        />
        <ResumeBlock
          type={homeData[3].type}
          backgroundExperienceDetails={homeData[3].backgroundExperienceDetails}
          experienceDetails={homeData[3].experienceDetails}
        />
        <ResumeBlock
          type={homeData[4].type}
          backgroundEducation={homeData[4].backgroundEducation}
        />
        <ResumeBlock
          type={homeData[5].type}
          backgroundEducationDetails={homeData[5].backgroundEductionDetails}
          educationDetails={homeData[5].educationDetails}
        />
        <ResumeBlock
          type={homeData[6].type}
          backgroundSkills={homeData[6].backgroundSkills}
        />
        <ResumeBlock
          type={homeData[7].type}
          backgroundSkillsDetails={homeData[7].backgroundSkillsDetails}
          skillsDetails={homeData[7].skillsDetails}
        />
      </Grid>
    );
  }
};

const mapStateToProps = ({ homeDataReducer }) => ({
  homeData: homeDataReducer.homeData,
});

export default connect(mapStateToProps, {
  loadHomeData: actions.loadHomeDataAction,
})(Home);
