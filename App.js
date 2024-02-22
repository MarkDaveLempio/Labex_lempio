import React, {useState} from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const App = () => {
  
  
const [currentSection, setCurrentSection] = useState('name');
  const data = {
     imageUrl: require('./assets/davelempio.jpg'),
    name: 'Mark Dave Lempio',
      course: 'Bachelor Of Science in Information Technology',
      education: {
      elementary: 'Catmon Integrated School',
      elementaryYear: '2008',
      highSchool: 'Catmon Integrated School',
      highSchoolYear: ' 2010',
      college: 'Global Reciproal Colleges',
      collegeYear: ' 2019',
    },
    

    about: 'HI! Mark Dave Lempio21-year-old leader committed to driving positive change in various roles: Church leader fostering spiritual growth and community unity. Capstone leader achieving ambitious goals through innovation and teamwork. Community leader advocating for social cohesion and addressing local needs. Cell group leader nurturing authentic connections and personal development.',
    project1:
    {
      projectName: 'MY RESUME',
      imageSrc: require('./assets/resume.jpg'),
      link: 'https://davee2002.github.io/lempioportfolio.github.io/?fbclid=IwAR2BejZg8ywYRicbnA0xeiO_NqDj4EcRujkNyfV1S2cTjtO9OwohBpmIGD4',
      description: 'THIS IS MY FIRST WEB-RESUME!'
    },
    project2:
    {
      projectName: 'TEAM PAYAMAN WEBSITE',
      imageSrc: require('./assets/Congweb.PNG'),
      link: 'https://github.com',
      description: 'I MADE A TEAM PAYAMAN WEB-FANPAGE!'
    },
   

  }
  

  const handlePress = () => {
    setCurrentSection((prevSection) => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about'
        case 'about':
          return 'project1'
        case 'project1':
          return 'project2'
        case 'project2':
          return 'contact'
        case 'contact':
          return 'name'
        default:
          return 'name'

   
      }
    });
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity onPress={handlePress} style={styles.mainContainer}>
          {currentSection === 'name' && (
            <>
              <View style={{alignItems:'center'}}>
                <Image source={data.imageUrl} style={styles.profileImg}/>
              </View>
              <View>
                <Text style={[styles.textHeader, {textAlign:'center'}]}>{data.name}</Text>
                <Text style={[styles.textBody, {textAlign:'center'}]}>{data.course}</Text>
              </View>
            </>
          )}

          {currentSection === 'education' && (
            <View>
              <Text style={styles.textHeader}>Education: </Text>
              <Text style={styles.textHeaderSmall}>College:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.college2}</Text>
              <Text style={styles.textBodySubtle}>{data.education.collegeYear2}</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.college}</Text>
              <Text style={styles.textBodySubtle}>{data.education.collegeYear}</Text>
              <Text style={styles.textHeaderSmall}>High School:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.highSchool}</Text>
              <Text style={styles.textBodySubtle}>{data.education.highSchoolYear}</Text>
              <Text style={styles.textHeaderSmall}>Elementary:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.elementary}</Text>
              <Text style={styles.textBodySubtle}>{data.education.elementaryYear}</Text>
            </View>
          )}

          {currentSection === 'about' && (
            <View>
              <Text style={styles.textHeader}>About Me: </Text>
              <Text>{data.about}</Text>
            </View>
          )}
          {currentSection === 'project1' && (
            <View>
              <Text style={styles.textHeader}>Project #1:</Text>
              <Text style={styles.textHeaderSmall}>{data.project1.projectName}</Text>
              <View style={{alignItems:'center'}}>
                <Image style={styles.projectImg} source={data.project1.imageSrc}/>
              </View>
               <Text style={styles.textBody}>{data.project1.link}</Text>
               <Text style={styles.textBody}>{data.project1.description}</Text>
            </View>
          )}
          {currentSection === 'project2' && (
            <View>
              <Text style={styles.textHeader}>Project #2:</Text>
              <Text style={styles.textHeaderSmall}>{data.project2.projectName}</Text>
              <View style={{alignItems:'center'}}>
                <Image style={styles.projectImg} source={data.project2.imageSrc}/>
              </View>
               <Text style={styles.textBody}>{data.project2.link}</Text>
               <Text style={styles.textBody}>{data.project2.description}</Text>
            </View>
          )}
            {currentSection === 'contact' && (
            <View>
               <Text style={styles.textHeader}>Contact Me:</Text>
               <Text style={styles.textBodySubtle}>Email:</Text>
              <Text style={styles.textBody}>marclempio@gmail.com</Text>
                <Text style={styles.textBodySubtle}>FB Name:</Text>
                <Text style={styles.textBody}>Mark Dave Lempio</Text>
               <Text style={styles.textBodySubtle}>Contact Number:</Text>
               <Text style={styles.textBody}>09918809546</Text>
            </View>
          )}

        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
 

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    padding: 20,
    justifyContent: 'center',
  },
  profileImg: {
    height: 200,
    width: 200,
    borderRadius: 200 / 2,
    marginBottom: 20,
  },
    projectImg: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12
  },
  textHeaderSmall: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12
  },
  textBody: {
    fontSize: 18,
    marginBottom: 12
  },
  textBodySubtle: {
    fontSize: 18,
    marginBottom: 12,
    color: 'gray'
  },

  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  borderRed: {
    borderWidth: 1, // border width
    borderColor: 'red', // border color
  }
})


export default App;