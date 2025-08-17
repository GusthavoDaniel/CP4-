import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserCard = ({ user }) => {
  
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  
  const getAvatarColor = (id) => {
    const colors = [
      '#007AFF', '#34C759', '#FF9500', '#FF3B30',
      '#AF52DE', '#FF2D92', '#5AC8FA', '#FFCC00'
    ];
    return colors[id % colors.length];
  };

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <View style={styles.cardContent}>
        {/* Avatar com iniciais */}
        <View style={[
          styles.avatar, 
          { backgroundColor: getAvatarColor(user.id) }
        ]}>
          <Text style={styles.avatarText}>
            {getInitials(user.name)}
          </Text>
        </View>

        {/* Informações do usuário */}
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.name}</Text>
          
          <View style={styles.contactRow}>
            <Ionicons 
              name="mail-outline" 
              size={16} 
              color="#666" 
              style={styles.icon}
            />
            <Text style={styles.email}>{user.email}</Text>
          </View>
          
          <View style={styles.contactRow}>
            <Ionicons 
              name="location-outline" 
              size={16} 
              color="#666" 
              style={styles.icon}
            />
            <Text style={styles.city}>{user.address.city}</Text>
          </View>
        </View>

        {/* Indicador de ação */}
        <View style={styles.actionIndicator}>
          <Ionicons 
            name="chevron-forward-outline" 
            size={20} 
            color="#ccc" 
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    flex: 1,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  icon: {
    marginRight: 8,
    width: 16,
  },
  email: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  city: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  actionIndicator: {
    padding: 4,
  },
});

export default UserCard;

