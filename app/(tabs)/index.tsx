import { Image, StyleSheet, Platform,  SafeAreaView, ScrollView, View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { getNews } from '../services/newsApi';

interface Article {
  titulo: string;
  introducao: string;
}

export default function HomeScreen() {

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNews();
        setArticles(news);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(articles.length / articlesPerPage)));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * articlesPerPage;
  const selectedArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.message}>Carregando...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.message}>Erro ao carregar as notícias</Text>
      </SafeAreaView>
    );
  }


  return (
   
  <SafeAreaView style={styles.container}>
        <Image style={styles.reactLogo}
        source={require("../../assets/images/newsFlash.png")}>
      </Image>
  <ScrollView>
    {selectedArticles.map((article, index) => (
      <View key={index} style={styles.article}>
        <Text style={styles.title}>{article.titulo}</Text>
        <Text style={styles.description}>{article.introducao}</Text>
      </View>
    ))}
  </ScrollView>
  <View style={styles.pagination}>
    <Button title="Anterior" onPress={handlePrevPage} disabled={currentPage === 1} />
    <Text style={styles.pageNumber}>{currentPage}</Text>
    <Button title="Próxima" onPress={handleNextPage} disabled={currentPage === Math.ceil(articles.length / articlesPerPage)} />
  </View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 440,
    bottom: 0,
    left: -35,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  article: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  pageNumber: {
    fontSize: 18,
  },
});
