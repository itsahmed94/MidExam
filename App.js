import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Ahmed</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>sp17mcsw0009@maju.edu.pk|0324-2430574</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}