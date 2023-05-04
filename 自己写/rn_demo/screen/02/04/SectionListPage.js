import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  SectionList,
} from "react-native";
import MovieItemCell from "../../../components/MovieItemCell";
import { queryMovies, randomRefreshMovies } from "../../../data/Service";
import { useEffect, useState } from "react";
import moviesData from "../../../data/movies.json";

export const width = Dimensions.get("window").width;

let currentPage = 1; // 当前页
let pageSize = 10; // 每一页加载多少条
let totalPage = Math.ceil(moviesData.length / pageSize); // 总页数

export default function MovieListPage() {
  const data = queryMovies();
  const [movieList, setMovieList] = useState([]);
  const [sectionData, setSectionData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [isHeaderRefreshing, setIsHeaderRefreshing] = useState(false);
  const [isFooterRefreshing, setIsFooterRefreshing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMovieList(data);
      setLoaded(true);
    }, 3000);
  }, []);
  useEffect(() => {
    setSectionData(getSectionData(movieList));
  }, [movieList]);

  function renderTitle() {
    return (
      <View style={styles.barStyle}>
        <Text style={styles.txtStyle}>电影列表</Text>
      </View>
    );
  }
  function renderLoad() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#268dcd" />
        <Text
          style={{
            color: "#666",
            paddingLeft: 10,
          }}
        >
          努力加载中
        </Text>
      </View>
    );
  }
  function getSectionData(data) {
    const mapKey = [
      { key: "hot", title: "正在上映" },
      { key: "coming", title: "即将上映" },
    ];
    const movieGroup = data.reduce(
      (pre, cur) => (
        pre[cur.state]?.push(cur) || (pre[cur.state] = [cur]), pre
      ),
      {}
    );
    return mapKey.map((item) => {
      return {
        title: item.title,
        data: movieGroup[item.key] ?? [],
      };
    });
  }

  function beginHeaderRefresh() {
    setIsHeaderRefreshing(true);
    const newMovie = randomRefreshMovies();
    const data = [...newMovie, ...movieList];
    setTimeout(() => {
      setIsHeaderRefreshing(false);
      setMovieList(data);
    }, 1000);
  }
  function beginFooterRefresh() {
    setIsFooterRefreshing(true);
    if (currentPage < totalPage) {
      currentPage++;
      const newMovie = queryMovies(currentPage, pageSize);
      const data = [...movieList, ...newMovie];
      setTimeout(() => {
        setIsFooterRefreshing(false);
        setMovieList(data);
      }, 1000);
    }
  }
  function renderList() {
    return (
      <SectionList
        sections={sectionData}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <MovieItemCell
            movie={item}
            onPress={() => {
              alert("点击的电影名：" + item.title);
            }}
          />
        )}
        keyExtractor={(item) =>
          item.id + Date.now() + Math.floor(Math.random() * 100)
        }
        refreshing={isHeaderRefreshing}
        onRefresh={beginHeaderRefresh}
        onEndReachedThreshold={0.1}
        onEndReached={beginFooterRefresh}
        stickySectionHeadersEnabled
      />
    );
  }
  function renderFooterLoad() {
    if (isFooterRefreshing) {
      return (
        <View style={styles.footerStyle}>
          <ActivityIndicator size="large" color="#268dcd" />
          <Text
            style={{
              color: "#666",
              paddingLeft: 10,
            }}
          >
            努力加载中
          </Text>
        </View>
      );
    }
  }
  return (
    <View style={styles.flex}>
      {renderTitle()}
      {!loaded ? renderLoad() : renderList()}
      {renderFooterLoad()}
    </View>
  );
}
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: "#268dcd",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flexDirection: "row",
  },
  barStyle: {
    height: 48,
    width: width,
    justifyContent: "center",
    backgroundColor: "#268dcd",
  },
  txtStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  footerStyle: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  sectionHeader: {
    padding: 10,
    backgroundColor: "#268dcd",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
