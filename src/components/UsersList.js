import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  RefreshControl,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useUsers } from '../hooks/useUsers';
import UserCard from './UserCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorState from './ErrorState';

const UsersList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { users, isLoading, isError, error, refetch, isRefreshing } = useUsers();

  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Lista de Usuários</Text>
          <Text style={styles.subtitle}>Carregando dados...</Text>
        </View>
        <LoadingSpinner message="Carregando usuários..." />
      </SafeAreaView>
    );
  }

  
  if (isError) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Lista de Usuários</Text>
          <Text style={styles.subtitle}>Erro ao carregar</Text>
        </View>
        <ErrorState
          message="Erro ao carregar usuários"
          onRetry={refetch}
        />
      </SafeAreaView>
    );
  }

  
  const renderUser = ({ item }) => (
    <UserCard user={item} />
  );

  
  const renderListHeader = () => (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <Ionicons 
          name="search-outline" 
          size={20} 
          color="#666" 
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por nome, email ou cidade..."
          placeholderTextColor="#999"
          value={searchTerm}
          onChangeText={setSearchTerm}
          returnKeyType="search"
        />
        {searchTerm.length > 0 && (
          <Text style={styles.searchResults}>
            {filteredUsers.length} resultado{filteredUsers.length !== 1 ? 's' : ''}
          </Text>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Usuários</Text>
        <Text style={styles.subtitle}>
          {searchTerm ? 
            `${filteredUsers.length} de ${users.length} usuários` : 
            `Total: ${users.length} usuários`
          }
        </Text>
      </View>
      
      <FlatList
        data={filteredUsers}
        renderItem={renderUser}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderListHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refetch}
            colors={['#007AFF']}
            tintColor="#007AFF"
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#e6f3ff',
    opacity: 0.9,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 4,
  },
  searchResults: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '600',
    marginLeft: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default UsersList;

