
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import HqListViewItem from './HqListViewItem';

const {width,height} = Dimensions.get('window');
const  myData = [
    {
        "id": 6370768,
        "title": "得力 精准测度家用温度计 券后5.9元",
        "image": "http://imgcdn.guangdiu.com/9d50887ef238c184e8c5d15743894c28.jpg?imageView2/2/w/224/h/224/format/jpg",
        "iftobuy": 1,
        "buyurl": "https://detail.tmall.com/item.htm?id=549957848292"
    },
    {
        "id": 6370697,
        "title": "毕亚兹(BIAZE)32GB存储卡 Class10 高速TF卡（Micro SD卡）行车记录仪内存卡 京东JOY纪念版-TF32 *5件 109.5元（合21.9元/件）",
        "image": "http://imgcdn.guangdiu.com/9afd4ca47132ff3e0111e6f7b956786f.jpg?imageView2/2/w/224/h/224/format/jpg",
        "iftobuy": 1,
        "buyurl": "https://guangdiu.com/go.php?id=6370697&from=newhots"
    },
    {
        "id": 6370746,
        "title": "优衣库制造商，Maxwin 马威 男士复古绞花针织圆领羊毛衫 多色149元包邮（需领券）",
        "image": "http://imgcdn.guangdiu.com/91e974fa981095adc768140a1d4fd6d4.jpg?imageView2/2/w/224/h/224/format/jpg",
        "iftobuy": 1,
        "buyurl": "https://detail.tmall.com/item.htm?id=577020038333"
    },
    {
        "id": 6370707,
        "title": "￥719 Dickies新款印花棉服 可脱卸内胆连帽夹克男 181M10WD01",
        "image": "http://imgcdn.guangdiu.com/1978fd934997ab0c0e8c5ce127ede24e.jpg?imageView2/2/w/224/h/224/format/jpg",
        "iftobuy": 1,
        "buyurl": "https://detail.tmall.com/item.htm?id=560421108015"
    },
]
export default class HqListView extends Component{

    constructor(props){
        super(props)
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource:ds,
        };
        // this.fetchData = this.fetchData.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.enterDetail = ()=>{
            alert(";;");
        };
    }
    fetchData(){

        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(myData)
        });
        /*
        fetch('http://guangdiu.com/api/gethots.php')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(responseData.data)
                });
            })
        */
    }

    renderRow(rowData){
        console.log("-----"+JSON.stringify(rowData));

        return (

           <TouchableOpacity onPress={()=>{
               this.props.enterDetail(rowData);
           }}>
               <View>
                   <HqListViewItem
                       image={rowData.image}
                       title={rowData.title}
                   />
                   {/*<Text>{rowData.image}</Text>*/}
                   {/*<Text>{rowData.title}</Text>*/}
               </View>
           </TouchableOpacity>
        );
    }
    componentDidMount(){
       this.fetchData();
    }
    render(){
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    showHorizontalScrollIndicator={false}
                    style={styles.listViewStyle}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white',
    },
    listViewStyle:{
        width:width,
    }

});