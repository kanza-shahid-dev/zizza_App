import React,{useState} from 'react'
import { View, Text, StyleSheet,Image, Dimensions, FlatList, ScrollView } from 'react-native'
import CommentsContainer from '../component/CommentsContainer'
import colors from '../constants/colors'
//import VideoPlayer from 'react-native-video-player';
import Video from 'react-native-video';
import
  MediaControls, {PLAYER_STATES}
from 'react-native-media-controls';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import VideoPlayer from 'react-native-video-controls';
//import VideoPlayers from 'react-native-video-players';
const {width,height}=Dimensions.get('window')
const Home = () => {
    const videoPlayer = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [paused, setPaused] = useState(false);
    const [
      playerState, setPlayerState
    ] = useState(PLAYER_STATES.PLAYING);
    const [screenType, setScreenType] = useState('content');
    const onSeek = (seek) => {
        //Handler for change in seekbar
        videoPlayer.current.seek(seek);
      };
    
      const onPaused = (playerState) => {
        //Handler for Video Pause
        setPaused(!paused);
        setPlayerState(playerState);
      };
    
      const onReplay = () => {
        //Handler for Replay
        setPlayerState(PLAYER_STATES.PLAYING);
        videoPlayer.current.seek(0);
      };
    
      const onProgress = (data) => {
        // Video Player will progress continue even if it ends
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
          setCurrentTime(data.currentTime);
        }
      };
    
      const onLoad = (data) => {
        setDuration(data.duration);
        setIsLoading(false);
      };
    
      const onLoadStart = (data) => setIsLoading(true);
    
      const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);
    
      const onError = () => alert('Oh! ', error);
    
      const exitFullScreen = () => {
        alert('Exit full screen');
      };
    
      const enterFullScreen = () => {};
    
      const onFullScreen = () => {
        setIsFullScreen(isFullScreen);
        if (screenType == 'content') setScreenType('cover');
        else setScreenType('content');
      };
    
      const renderToolbar = () => (
        <View>
          <Text style={styles.toolbar}> toolbar </Text>
        </View>
      );
    
      const onSeeking = (currentTime) => setCurrentTime(currentTime);
    
    const data=[
        {
            userName:'@devmusama',description:'pagarapgh pagar para paga pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh'
        },
        {
            userName:'@devmusama',description:'pagarapgh pagarapgh rapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh'
        },
        {
            userName:'@devmusama',description:'pagarapgh pagar pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh'
        },
        {
            userName:'@devmusama',description:'pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh'
        },
        {
            userName:'@devmusama',description:'pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh'
        },
        {
            userName:'@devmusama',description:'pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh'
        },
    ]
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.container}>

            {/**Header */}
            <View style={{backgroundColor:'black',padding:14,borderBottomLeftRadius:60,borderBottomRightRadius:60}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{paddingLeft:10,paddingRight:5}}>
                      <Image source={require('../assets/images/user.jpg')} style={{height:60,width:60, borderRadius:100}}/>
                    </View>
                    <View style={{flex:1,paddingLeft:15,paddingRight:10}}>
                      <Text style={{color:'white',fontSize:20}}>@devmusama</Text>
                      <Text style={{color:colors.primary,fontSize:20}}>My Following</Text>
                    </View>
                    <View style={{alignItems:'flex-end'}}>
                      <Text style={{color:colors.primary,fontSize:30}}>50+</Text>
                    </View>
                </View>
            </View>
              {/**End Header */}


    <View style={styles.bodyContainer}>

    {/* <Video //source={{uri: "background"}}   // Can be a URL or a local file.
    source={{uri: 'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4' }}
      style={{width:'100%',height:300}}
  
       /> */}

       {/* <View style={{width:300,height:300}}>
       <Video
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        paused={paused}
        ref={videoPlayer}
        resizeMode={screenType}
        onFullScreen={isFullScreen}
        resizeMode="contain"
        source={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={{width:200,height:300}}
        volume={10}
      />
       <MediaControls
        duration={duration}
        isLoading={isLoading}
        mainColor="#333"
        style={{width:200,height:300}}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking}
        playerState={playerState}
        progress={currentTime}
      />
      </View> */}
      <View style={{flexDirection:'row',margin:5,alignItems:'center'}}>
      <View style={{ width:width/2,height:height/3}}>
        <VideoPlayer
            source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
            resizeMode={"cover"}
            toggleResizeModeOnFullscreen={true}
            thumbnail={{ uri: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg' }}
            disableBack
            disableVolume
            style={{borderRadius:30}}
        />
      </View>
      <View style={{flex:1,paddingLeft:10}}>
          <Text>{data[0].description}</Text>
      </View>
    </View>

        <View style={{flexDirection:'row',alignItems:'flex-end'}}>
            <Text style={{fontSize:20,fontWeight:'600'}}>COMMENTS</Text>
            <Text style={{color:colors.primary,fontSize:28,fontWeight:'700',marginLeft:20}}>50+</Text>
        </View>

        <FlatList
           data={data}
           renderItem={({item})=>{
            return <CommentsContainer description={item.description}/>}} 
            />

        </View>
    </View>
    </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',

    },
    bodyContainer:{
        padding:width*0.05,
    },
  
      mediaPlayer: {
        height:200,
        width:200,
      },
})
export default Home
